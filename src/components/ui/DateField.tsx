import { useRef, useState } from 'react';
import { toIso, fromIso, isValidDateFormat } from '../../lib/dateUtils';
import { XIcon, CalendarIcon } from './Icons';

interface Props {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  labelClassName?: string;
  clearAriaLabel?: string;
}

const inputClass =
  'border border-slate-300 rounded-md px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent';

export function DateField({ id, label, value, onChange, labelClassName, clearAriaLabel }: Props) {
  const datePickerRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className={labelClassName ?? 'text-sm font-medium text-slate-600'}>
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type="text"
          value={value}
          onChange={e => { setError(false); onChange(e.target.value); }}
          onBlur={() => setError(!isValidDateFormat(value))}
          className={`${inputClass} w-full ${value ? 'pr-16' : 'pr-9'} ${error ? 'border-red-400 focus:ring-red-400' : ''}`}
          placeholder="DD/MM/AAAA"
        />
        <input
          ref={datePickerRef}
          type="date"
          value={toIso(value)}
          onChange={e => { setError(false); onChange(fromIso(e.target.value)); }}
          className="absolute inset-0 opacity-0 pointer-events-none"
          tabIndex={-1}
        />
        {value && (
          <button
            type="button"
            onClick={() => { setError(false); onChange(''); }}
            className="absolute right-9 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
            title="Limpar"
            aria-label={clearAriaLabel ?? 'Limpar data'}
          >
            <XIcon />
          </button>
        )}
        <button
          type="button"
          onClick={() => datePickerRef.current?.showPicker?.()}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-sky-600 transition-colors"
          title="Abrir calendário"
          aria-label="Abrir calendário"
        >
          <CalendarIcon />
        </button>
      </div>
      {error && (
        <p className="text-xs text-red-500">Formato inválido — use DD/MM/AAAA</p>
      )}
    </div>
  );
}
