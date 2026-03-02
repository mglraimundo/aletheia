import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import type { FormState, EyeSelection } from '../../types';
import type { DoctorInfo } from '../../types';
import { EYE_LABELS } from '../../types';
import { CLINICAL_FIELDS, DOCTOR_FIELDS, PATIENT_FIELDS, LEGAL_REP_FIELDS } from './coordinates';
import { layoutText, layoutSingleLine } from './textLayout';

const EYE_PREFIX: Record<Exclude<EyeSelection, ''>, string> = {
  'od':               'od',
  'os':               'os',
  'ou-simultaneous':  'ode-sim',
  'ou-sequential':    'ode-seq',
};

function buildFilename(form: FormState): string {
  const parts: string[] = [];
  if (form.eye) parts.push(EYE_PREFIX[form.eye]);
  if (form.templateId) parts.push(form.templateId);
  return parts.join('-') || 'consentimento-informado';
}

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

  // 3. Build clinical text with eye prefix for diagnosis and description
  const eyePrefix = form.eye ? EYE_LABELS[form.eye] + ': ' : '';

  const clinicalTexts: Record<string, string> = {
    diagnosis:          (eyePrefix + form.diagnosis).trim(),
    description:        (eyePrefix + form.description).trim(),
    benefits:           form.benefits,
    risks:              form.risks,
    alternatives:       form.alternatives,
    risksOfNoTreatment: form.risksOfNoTreatment,
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
    const email = doctor.staffId
      ? `${doctor.staffId}@ulscoimbra.min-saude.pt`
      : '';
    const doctorValues: Record<string, string> = {
      name:          doctor.name,
      licenseNumber: doctor.licenseNumber ? `OM nº ${doctor.licenseNumber}` : '',
      contact:       email,
      date:          form.date,
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

  // Draw patient + legal representative fields on pages 1 and 3 (both copies of page 2)
  const patientValues: Record<string, string> = {
    name: form.patientName,
    date: form.patientDate,
  };

  const legalRepValues: Record<string, string> = {
    name:         form.legalRepName,
    docNumber:    form.legalRepDocNumber,
    docDate:      form.legalRepDocDate,
    relationship: form.legalRepRelationship,
  };

  for (const pageIndex of [1, 3]) {
    const page = outDoc.getPage(pageIndex);

    for (const [fieldName, coord] of Object.entries(PATIENT_FIELDS)) {
      const text = patientValues[fieldName];
      if (!text) continue;
      const { text: renderedText, fontSize } = layoutSingleLine(font, text, coord.x, coord.y, coord.maxWidth);
      page.drawText(renderedText, { x: coord.x, y: coord.y, size: fontSize, font, color: black });
    }

    for (const [fieldName, coord] of Object.entries(LEGAL_REP_FIELDS)) {
      const text = legalRepValues[fieldName];
      if (!text) continue;
      const { text: renderedText, fontSize } = layoutSingleLine(font, text, coord.x, coord.y, coord.maxWidth);
      page.drawText(renderedText, { x: coord.x, y: coord.y, size: fontSize, font, color: black });
    }
  }

  outDoc.setTitle(buildFilename(form));
  return outDoc.save();
}

export async function calibratePdf(): Promise<void> {
  const response = await fetch('/base.pdf');
  if (!response.ok) throw new Error('Failed to fetch base.pdf');
  const baseBytes = await response.arrayBuffer();

  const base = await PDFDocument.load(baseBytes);
  const outDoc = await PDFDocument.create();
  const [p1a, p2a, p1b, p2b] = await outDoc.copyPages(base, [0, 1, 0, 1]);
  outDoc.addPage(p1a);
  outDoc.addPage(p2a);
  outDoc.addPage(p1b);
  outDoc.addPage(p2b);

  const font = await outDoc.embedFont(StandardFonts.Helvetica);
  const red   = rgb(0.9, 0.1, 0.1);
  const blue  = rgb(0.1, 0.3, 0.9);
  const green = rgb(0.1, 0.7, 0.2);
  const BOX_HEIGHT = 12;

  for (const pageIndex of [0, 2]) {
    const page = outDoc.getPage(pageIndex);

    for (const [fieldName, coord] of Object.entries(CLINICAL_FIELDS)) {
      page.drawRectangle({
        x: coord.x,
        y: coord.firstLineY - coord.height,
        width: coord.width,
        height: coord.height,
        borderColor: red,
        borderWidth: 1,
        color: red,
        opacity: 0.08,
      });
      page.drawText(fieldName, { x: coord.x + 2, y: coord.firstLineY - 10, size: 7, font, color: red });
    }

    for (const [fieldName, coord] of Object.entries(DOCTOR_FIELDS)) {
      page.drawRectangle({
        x: coord.x,
        y: coord.y - 2,
        width: coord.maxWidth,
        height: BOX_HEIGHT,
        borderColor: blue,
        borderWidth: 1,
        color: blue,
        opacity: 0.08,
      });
      page.drawText(fieldName, { x: coord.x + 2, y: coord.y + 1, size: 6, font, color: blue });
    }
  }

  const orange = rgb(0.9, 0.5, 0.1);

  for (const pageIndex of [1, 3]) {
    const page = outDoc.getPage(pageIndex);

    for (const [fieldName, coord] of Object.entries(PATIENT_FIELDS)) {
      page.drawRectangle({
        x: coord.x,
        y: coord.y - 2,
        width: coord.maxWidth,
        height: BOX_HEIGHT,
        borderColor: green,
        borderWidth: 1,
        color: green,
        opacity: 0.08,
      });
      page.drawText(fieldName, { x: coord.x + 2, y: coord.y + 1, size: 6, font, color: green });
    }

    for (const [fieldName, coord] of Object.entries(LEGAL_REP_FIELDS)) {
      page.drawRectangle({
        x: coord.x,
        y: coord.y - 2,
        width: coord.maxWidth,
        height: BOX_HEIGHT,
        borderColor: orange,
        borderWidth: 1,
        color: orange,
        opacity: 0.08,
      });
      page.drawText(fieldName, { x: coord.x + 2, y: coord.y + 1, size: 6, font, color: orange });
    }
  }

  const bytes = await outDoc.save();
  const blob = new Blob([new Uint8Array(bytes)], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
  setTimeout(() => URL.revokeObjectURL(url), 10_000);
}

export async function previewPdf(form: FormState, doctor: DoctorInfo): Promise<void> {
  const bytes = await buildPdf(form, doctor);
  // new Uint8Array(bytes) copies data into a proper ArrayBuffer (TS 5.9 strict compat)
  const blob = new Blob([new Uint8Array(bytes)], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
  // Revoke after browser has had time to load the URL
  setTimeout(() => URL.revokeObjectURL(url), 60_000);
}

export async function printPdf(form: FormState, doctor: DoctorInfo): Promise<void> {
  const bytes = await buildPdf(form, doctor);
  const blob = new Blob([new Uint8Array(bytes)], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const filename = buildFilename(form);
  const prevTitle = document.title;
  document.title = filename;

  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = url;
  document.body.appendChild(iframe);

  iframe.onload = () => {
    // Delay gives Edge (and other browsers) time to initialise the PDF viewer
    // before print() is called, preventing a silent miss.
    setTimeout(() => {
      let printTriggered = false;

      if (iframe.contentWindow) {
        // onbeforeprint fires synchronously when the print dialog actually opens.
        // If it never fires (Safari), we know to fall back.
        iframe.contentWindow.onbeforeprint = () => { printTriggered = true; };
        // onafterprint fires after OK or Cancel — clean up there.
        iframe.contentWindow.onafterprint = () => {
          document.title = prevTitle;
          URL.revokeObjectURL(url);
          iframe.remove();
        };
      }

      try {
        iframe.contentWindow?.print();
      } catch {
        // Some browsers may throw; ignore and let the fallback below handle it.
      }

      // After a short wait, check whether the dialog was actually triggered.
      // Safari's PDF plugin ignores .print() without throwing, so printTriggered
      // stays false — open in a new tab instead so the user can Cmd+P manually.
      setTimeout(() => {
        if (!printTriggered) {
          document.title = prevTitle;
          iframe.remove();
          window.open(url, '_blank');
          setTimeout(() => URL.revokeObjectURL(url), 60_000);
        }
      }, 500);
    }, 500); // 500 ms post-load delay for Edge PDF renderer init
  };
}
