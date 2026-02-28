import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import type { FormState } from '../../types';
import type { DoctorInfo } from '../../types';
import { EYE_LABELS } from '../../types';
import { CLINICAL_FIELDS, DOCTOR_FIELDS } from './coordinates';
import { layoutText, layoutSingleLine } from './textLayout';

async function buildPdf(form: FormState, doctor: DoctorInfo): Promise<Uint8Array> {
  // 1. Load base PDF
  const response = await fetch('/base.pdf');
  if (!response.ok) throw new Error('Failed to fetch base.pdf');
  const baseBytes = await response.arrayBuffer();

  const base = await PDFDocument.load(baseBytes);

  // 2. Create output document with 4 pages: [p1, p2, p1, p2]
  const outDoc = await PDFDocument.create();
  const [p1a, p2a, p1b, p2b] = await outDoc.copyPages(base, [0, 1, 0, 1]);
  outDoc.addPage(p1a);
  outDoc.addPage(p2a);
  outDoc.addPage(p1b);
  outDoc.addPage(p2b);

  const font = await outDoc.embedFont(StandardFonts.Helvetica);
  const black = rgb(0, 0, 0);

  // 3. Build clinical text with eye prefix for diagnostico and descricao
  const eyePrefix = form.eye ? EYE_LABELS[form.eye] + '\n' : '';

  const clinicalTexts: Record<string, string> = {
    diagnostico:         (eyePrefix + form.diagnostico).trim(),
    descricao:           (eyePrefix + form.descricao).trim(),
    beneficios:          form.beneficios,
    riscos:              form.riscos,
    atos:                form.atos,
    riscosNaoTratamento: form.riscosNaoTratamento,
  };

  // 4. Draw clinical + doctor fields on pages 0 and 2 (both copies of page 1)
  for (const pageIndex of [0, 2]) {
    const page = outDoc.getPage(pageIndex);

    // Clinical fields
    for (const [fieldName, coord] of Object.entries(CLINICAL_FIELDS)) {
      const text = clinicalTexts[fieldName];
      if (!text) continue;

      const { lines, fontSize } = layoutText(
        font,
        text,
        coord.x,
        coord.firstLineY,
        coord.width,
        coord.height,
      );

      const lineHeight = fontSize * 1.2;
      lines.forEach((line, i) => {
        page.drawText(line, {
          x: coord.x,
          y: coord.firstLineY - i * lineHeight,
          size: fontSize,
          font,
          color: black,
        });
      });
    }

    // Doctor fields
    const email = doctor.mecanografico
      ? `${doctor.mecanografico}@ulscoimbra.min-saude.pt`
      : '';
    const doctorValues: Record<string, string> = {
      nome:     doctor.nome,
      cedula:   doctor.cedula ? `OM nº ${doctor.cedula}` : '',
      contacto: email,
      data:     form.data,
    };

    for (const [fieldName, coord] of Object.entries(DOCTOR_FIELDS)) {
      const text = doctorValues[fieldName];
      if (!text) continue;

      const { text: renderedText, fontSize } = layoutSingleLine(
        font,
        text,
        coord.x,
        coord.y,
        coord.maxWidth,
      );

      page.drawText(renderedText, {
        x: coord.x,
        y: coord.y,
        size: fontSize,
        font,
        color: black,
      });
    }
  }

  // To re-enable pre-filling the autorização checkbox, uncomment the block below
  // and restore the checkbox in DoctorSection.tsx + autorizacaoCheckbox in FormState.
  //
  // if (form.autorizacaoCheckbox) {
  //   const cb = CHECKBOXES.autorizo;
  //   for (const pageIndex of [1, 3]) {
  //     const page = outDoc.getPage(pageIndex);
  //     const pad = 2;
  //     page.drawLine({
  //       start: { x: cb.x + pad, y: cb.y + pad },
  //       end:   { x: cb.x + cb.size - pad, y: cb.y + cb.size - pad },
  //       thickness: 1.5,
  //       color: black,
  //     });
  //     page.drawLine({
  //       start: { x: cb.x + cb.size - pad, y: cb.y + pad },
  //       end:   { x: cb.x + pad, y: cb.y + cb.size - pad },
  //       thickness: 1.5,
  //       color: black,
  //     });
  //   }
  // }

  return outDoc.save();
}

export async function previewPdf(form: FormState, doctor: DoctorInfo): Promise<void> {
  const bytes = await buildPdf(form, doctor);
  // new Uint8Array(bytes) copies data into a proper ArrayBuffer (TS 5.9 strict compat)
  const blob = new Blob([new Uint8Array(bytes)], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
}

export async function printPdf(form: FormState, doctor: DoctorInfo): Promise<void> {
  const bytes = await buildPdf(form, doctor);
  const blob = new Blob([new Uint8Array(bytes)], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);

  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = url;
  document.body.appendChild(iframe);

  iframe.onload = () => {
    try {
      iframe.contentWindow?.print();
    } catch {
      // Fallback for browsers that block iframe print
      window.open(url, '_blank');
    }
  };
}
