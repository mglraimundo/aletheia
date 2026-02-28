import { useState } from 'react';

interface Props {
  onPreview: () => Promise<void>;
  onPrint: () => Promise<void>;
}

export function ActionButtons({ onPreview, onPrint }: Props) {
  const [loading, setLoading] = useState<'preview' | 'print' | null>(null);

  async function handle(action: 'preview' | 'print', fn: () => Promise<void>) {
    setLoading(action);
    try {
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
        className="px-5 py-2.5 bg-white border border-sky-300 text-sky-700 rounded-lg text-sm font-medium hover:bg-sky-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading === 'preview' ? 'A gerar...' : 'Pré-visualizar'}
      </button>
      <button
        onClick={() => handle('print', onPrint)}
        disabled={loading !== null}
        className="px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading === 'print' ? 'A preparar...' : 'Imprimir (x2)'}
      </button>
    </div>
  );
}
