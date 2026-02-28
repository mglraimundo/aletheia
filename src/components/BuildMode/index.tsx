import { useState } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { ClinicalFields } from '../ConsentForm/ClinicalFields';
import { TemplateSelector } from '../TemplateSelector';
import { SUBSPECIALTY_ORDER } from '../../templates';
import { previewPdf } from '../../lib/pdf/generatePdf';
import type { ConsentTemplate, DoctorInfo, FormState } from '../../types';

interface BuildState {
  name: string;
  subspecialty: string;
  aliases: string;
  diagnostico: string;
  descricao: string;
  beneficios: string;
  riscos: string;
  atos: string;
  riscosNaoTratamento: string;
}

const EMPTY: BuildState = {
  name: '',
  subspecialty: SUBSPECIALTY_ORDER[0],
  aliases: '',
  diagnostico: '',
  descricao: '',
  beneficios: '',
  riscos: '',
  atos: '',
  riscosNaoTratamento: '',
};

const PREVIEW_DOCTOR: DoctorInfo = {
  nome: 'Médico Exemplo',
  cedula: '00000',
  mecanografico: 'exemplo',
};

function buildAutoId(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function BuildMode() {
  const [state, setState] = useState<BuildState>(EMPTY);
  const [isPreviewing, setIsPreviewing] = useState(false);

  const autoId = buildAutoId(state.name);

  const formForPreview: FormState = {
    eye: '',
    templateId: '',
    diagnostico: state.diagnostico,
    descricao: state.descricao,
    beneficios: state.beneficios,
    riscos: state.riscos,
    atos: state.atos,
    riscosNaoTratamento: state.riscosNaoTratamento,
    data: new Date().toLocaleDateString('pt-PT', { day: '2-digit', month: '2-digit', year: 'numeric' }),
    autorizacaoCheckbox: false,
  };

  function handleTemplateSelect(t: ConsentTemplate) {
    setState(prev => ({
      ...prev,
      name: t.name,
      subspecialty: t.subspecialty,
      aliases: t.aliases?.join(', ') ?? '',
      diagnostico:         t.fields.diagnostico         ?? '',
      descricao:           t.fields.descricao           ?? '',
      beneficios:          t.fields.beneficios          ?? '',
      riscos:              t.fields.riscos              ?? '',
      atos:                t.fields.atos                ?? '',
      riscosNaoTratamento: t.fields.riscosNaoTratamento ?? '',
    }));
  }

  function handleClinicalChange(field: keyof FormState, value: string) {
    if (field in state) setState(prev => ({ ...prev, [field]: value }));
  }

  async function handlePreview() {
    setIsPreviewing(true);
    try {
      await previewPdf(formForPreview, PREVIEW_DOCTOR);
    } finally {
      setIsPreviewing(false);
    }
  }

  function handleDownload() {
    const template: ConsentTemplate = {
      id: autoId || 'novo-procedimento',
      name: state.name,
      subspecialty: state.subspecialty,
      aliases: state.aliases.split(',').map(a => a.trim()).filter(Boolean),
      fields: {
        ...(state.diagnostico && { diagnostico: state.diagnostico }),
        ...(state.descricao && { descricao: state.descricao }),
        ...(state.beneficios && { beneficios: state.beneficios }),
        ...(state.riscos && { riscos: state.riscos }),
        ...(state.atos && { atos: state.atos }),
        ...(state.riscosNaoTratamento && { riscosNaoTratamento: state.riscosNaoTratamento }),
      },
    };
    const blob = new Blob([JSON.stringify(template, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${template.id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const canDownload =
    state.name.trim() !== '' &&
    state.subspecialty !== '' &&
    state.diagnostico.trim() !== '' &&
    state.descricao.trim() !== '' &&
    state.beneficios.trim() !== '' &&
    state.riscos.trim() !== '' &&
    state.atos.trim() !== '' &&
    state.riscosNaoTratamento.trim() !== '';

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8 flex flex-col gap-6">
        <TemplateSelector onSelect={handleTemplateSelect} />

        <section className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          <div className="bg-sky-50 border-b border-sky-100 px-6 py-4">
            <h2 className="text-sm font-semibold text-sky-700 uppercase tracking-wide">
              Novo Modelo
            </h2>
          </div>
          <div className="p-6 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="proc-name" className="text-sm font-medium text-slate-700">
                  Nome do Procedimento <span className="text-red-500">*</span>
                </label>
                <input
                  id="proc-name"
                  type="text"
                  value={state.name}
                  onChange={e => setState(prev => ({ ...prev, name: e.target.value }))}
                  className="border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  placeholder="ex: Facoemulsificação + LIO"
                />
                {state.name && (
                  <p className="text-xs text-slate-400 mt-0.5">
                    ID gerado: <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-600">{autoId}</code>
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="proc-subspecialty" className="text-sm font-medium text-slate-700">
                  Subespecialidade <span className="text-red-500">*</span>
                </label>
                <select
                  id="proc-subspecialty"
                  value={state.subspecialty}
                  onChange={e => setState(prev => ({ ...prev, subspecialty: e.target.value }))}
                  className="border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white"
                >
                  {SUBSPECIALTY_ORDER.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="proc-aliases" className="text-sm font-medium text-slate-700">
                  Aliases de pesquisa
                </label>
                <input
                  id="proc-aliases"
                  type="text"
                  value={state.aliases}
                  onChange={e => setState(prev => ({ ...prev, aliases: e.target.value }))}
                  className="border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  placeholder="ex: faco, catarata — separados por vírgula"
                />
              </div>
            </div>

            <hr className="border-slate-100" />

            <ClinicalFields form={formForPreview} onChange={handleClinicalChange} required />
          </div>
        </section>

        <div className="flex gap-3 justify-end">
          <button
            onClick={handlePreview}
            disabled={isPreviewing}
            className="flex items-center gap-2 px-2.5 sm:px-5 py-2.5 bg-white border border-sky-300 text-sky-700 rounded-lg text-sm font-medium hover:bg-sky-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span className="hidden sm:inline">{isPreviewing ? 'A gerar...' : 'Pré-visualizar'}</span>
          </button>
          <button
            onClick={handleDownload}
            disabled={!canDownload}
            className="flex items-center gap-2 px-2.5 sm:px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            </svg>
            <span className="hidden sm:inline">Descarregar JSON</span>
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
