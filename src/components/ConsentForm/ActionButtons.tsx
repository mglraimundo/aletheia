import { useState } from 'react';

const REGISTO_TEXT =
  'Foi prestada informação clara e adequada sobre a natureza, objetivos, riscos e alternativas do procedimento, tendo o utente compreendido e visto todas as suas dúvidas esclarecidas. O consentimento informado foi assinado de forma livre e voluntária, tendo sido entregue a respetiva cópia ao utente.';

interface Props {
  onPreview: () => Promise<void>;
  onPrint: () => Promise<void>;
}

export function ActionButtons({ onPreview, onPrint }: Props) {
  const [loading, setLoading] = useState<'preview' | 'print' | null>(null);
  const [copied, setCopied] = useState(false);

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(REGISTO_TEXT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // silently ignore clipboard errors
    }
  }

  async function handle(action: 'preview' | 'print', fn: () => Promise<void>) {
    setLoading(action);
    try {
      if (action === 'print') await copyToClipboard();
      await fn();
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="flex gap-3 justify-end">
      <button
        onClick={() => handle('preview', onPreview)}
        disabled={loading !== null}
        className="flex items-center gap-2 px-2.5 sm:px-5 py-2.5 bg-white border border-sky-300 text-sky-700 rounded-lg text-sm font-medium hover:bg-sky-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <span className="hidden sm:inline">{loading === 'preview' ? 'A gerar...' : 'Pré-visualizar'}</span>
      </button>
      <button
        onClick={copyToClipboard}
        disabled={loading !== null}
        className="flex items-center gap-2 px-2.5 sm:px-5 py-2.5 bg-white border border-emerald-300 text-emerald-700 rounded-lg text-sm font-medium hover:bg-emerald-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
        <span className="hidden sm:inline">{copied ? 'Copiado!' : 'Registo CI'}</span>
      </button>
      <button
        onClick={() => handle('print', onPrint)}
        disabled={loading !== null}
        className="flex items-center gap-2 px-2.5 sm:px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 6 2 18 2 18 9" />
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
          <rect x="6" y="14" width="12" height="8" />
        </svg>
        <span className="hidden sm:inline">{loading === 'print' ? 'A preparar...' : 'Imprimir (x2)'}</span>
      </button>
    </div>
  );
}
