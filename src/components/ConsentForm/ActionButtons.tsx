import { useState } from 'react';
import { SUBSPECIALTY_ORDER } from '../../templates';
import type { ConsentTemplate, FormState } from '../../types';

const REGISTO_TEXT =
  'Foi prestada informação clara e adequada sobre a natureza, objetivos, riscos e alternativas do procedimento, tendo o utente compreendido e visto todas as suas dúvidas esclarecidas. O consentimento informado foi assinado de forma livre e voluntária, tendo sido entregue a respetiva cópia ao utente.';

interface ModalState {
  name: string;
  subspecialty: string;
  aliases: string;
}

function buildAutoId(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

interface Props {
  form: FormState;
  onDownload: () => Promise<void>;
  onPrint: () => Promise<void>;
  disabled?: boolean;
  calibrateMode?: boolean;
  onCalibrate?: () => Promise<void>;
}

export function ActionButtons({ form, onDownload, onPrint, disabled, calibrateMode, onCalibrate }: Props) {
  const [loading, setLoading] = useState<'download' | 'print' | 'calibrate' | null>(null);
  const [copied, setCopied] = useState<'success' | 'error' | false>(false);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, setModal] = useState<ModalState>({
    name: '',
    subspecialty: SUBSPECIALTY_ORDER[0],
    aliases: '',
  });
  const [saved, setSaved] = useState<ModalState | null>(null);

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(REGISTO_TEXT);
      setCopied('success');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied('error');
      setTimeout(() => setCopied(false), 2000);
    }
  }

  async function handle(action: 'download' | 'print' | 'calibrate', fn: () => Promise<void>) {
    setLoading(action);
    setPdfError(null);
    try {
      await fn();
    } catch (err) {
      setPdfError(err instanceof Error ? err.message : 'Erro ao gerar PDF');
    } finally {
      setLoading(null);
    }
  }

  function openModal() {
    setModal(saved ?? { name: '', subspecialty: SUBSPECIALTY_ORDER[0], aliases: '' });
    setIsModalOpen(true);
  }

  function handleDownload() {
    const template: ConsentTemplate = {
      id: buildAutoId(modal.name) || 'novo-procedimento',
      name: modal.name,
      subspecialty: modal.subspecialty,
      aliases: modal.aliases.split(',').map(a => a.trim()).filter(Boolean),
      fields: {
        ...(form.diagnosis          && { diagnosis:          form.diagnosis }),
        ...(form.description        && { description:        form.description }),
        ...(form.benefits           && { benefits:           form.benefits }),
        ...(form.risks              && { risks:              form.risks }),
        ...(form.alternatives       && { alternatives:       form.alternatives }),
        ...(form.risksOfNoTreatment && { risksOfNoTreatment: form.risksOfNoTreatment }),
      },
    };
    const blob = new Blob([JSON.stringify(template, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${template.id}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setSaved({ ...modal });
    setIsModalOpen(false);
  }

  return (
    <>
      <div className="flex flex-col gap-2 items-end">
        <div className="flex gap-3 justify-end">
          <button
            onClick={openModal}
            aria-label="Gravar Template"
            className="flex items-center gap-2 px-2.5 sm:px-5 py-2.5 bg-white border border-amber-300 text-amber-700 rounded-lg text-sm font-medium hover:bg-amber-50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
              <polyline points="17 21 17 13 7 13 7 21"/>
              <polyline points="7 3 7 8 15 8"/>
            </svg>
            <span className="hidden sm:inline">Template</span>
          </button>
          {calibrateMode && onCalibrate && (
            <button
              onClick={() => handle('calibrate', onCalibrate)}
              disabled={loading !== null}
              aria-label="Calibrar PDF"
              className="flex items-center gap-2 px-2.5 sm:px-5 py-2.5 bg-white border border-amber-400 text-amber-700 rounded-lg text-sm font-medium hover:bg-amber-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="22" y1="12" x2="18" y2="12"/>
                <line x1="6" y1="12" x2="2" y2="12"/>
                <line x1="12" y1="6" x2="12" y2="2"/>
                <line x1="12" y1="22" x2="12" y2="18"/>
              </svg>
              <span className="hidden sm:inline">{loading === 'calibrate' ? 'A gerar...' : 'Calibrar'}</span>
            </button>
          )}
          <button
            onClick={() => handle('download', onDownload)}
            disabled={loading !== null || !!disabled}
            aria-label="Descarregar PDF"
            className="flex items-center gap-2 px-2.5 sm:px-5 py-2.5 bg-white border border-sky-300 text-sky-700 rounded-lg text-sm font-medium hover:bg-sky-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span className="hidden sm:inline">{loading === 'download' ? 'A gerar...' : 'PDF'}</span>
          </button>
          <button
            onClick={copyToClipboard}
            disabled={loading !== null}
            aria-label="Copiar texto de registo CI"
            className="flex items-center gap-2 px-2.5 sm:px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            <span className="hidden sm:inline">{copied === 'success' ? 'Copiado!' : copied === 'error' ? 'Erro ao copiar' : 'Registo CI'}</span>
          </button>
          <button
            onClick={() => handle('print', onPrint)}
            disabled={loading !== null || !!disabled}
            aria-label="Imprimir consentimento (x2 cópias)"
            className="flex items-center gap-2 px-2.5 sm:px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
            <span className="hidden sm:inline">{loading === 'print' ? 'A preparar...' : 'Imprimir'}</span>
          </button>
        </div>
        {pdfError && (
          <p role="alert" className="text-xs text-red-600 text-right">
            Erro ao gerar PDF: {pdfError}
          </p>
        )}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={e => { if (e.target === e.currentTarget) setIsModalOpen(false); }}
        >
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 p-6 flex flex-col gap-4">
            <h2 className="text-base font-semibold text-slate-800">Gravar Template</h2>

            <p className="text-xs text-slate-500 leading-relaxed">
              Preencha os campos clínicos no formulário, configure os metadados e descarregue o ficheiro .JSON para enviar ao programador.
            </p>

            <div className="flex flex-col gap-1">
              <label htmlFor="tmpl-name" className="text-sm font-medium text-slate-700">
                Nome <span className="text-red-500">*</span>
              </label>
              <input
                id="tmpl-name"
                type="text"
                value={modal.name}
                onChange={e => setModal(prev => ({ ...prev, name: e.target.value }))}
                className="border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                placeholder="ex: Facoemulsificação + LIO"
                autoFocus
              />
              {modal.name && (
                <p className="text-xs text-slate-400 mt-0.5">
                  ID: <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-600">{buildAutoId(modal.name)}</code>
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="tmpl-subspecialty" className="text-sm font-medium text-slate-700">
                Subespecialidade
              </label>
              <select
                id="tmpl-subspecialty"
                value={modal.subspecialty}
                onChange={e => setModal(prev => ({ ...prev, subspecialty: e.target.value }))}
                className="border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white"
              >
                {SUBSPECIALTY_ORDER.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="tmpl-aliases" className="text-sm font-medium text-slate-700">
                Aliases <span className="text-slate-400 font-normal">(opcional, separados por vírgula)</span>
              </label>
              <input
                id="tmpl-aliases"
                type="text"
                value={modal.aliases}
                onChange={e => setModal(prev => ({ ...prev, aliases: e.target.value }))}
                className="border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                placeholder="ex: faco, catarata"
              />
            </div>

            <div className="flex gap-2 justify-end pt-1">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-lg border border-slate-300 text-slate-600 text-sm font-medium hover:bg-slate-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleDownload}
                disabled={modal.name.trim() === ''}
                className="px-4 py-2 rounded-lg bg-amber-600 text-white text-sm font-medium hover:bg-amber-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                ↓ Descarregar JSON
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
