import { useRef } from 'react';
import type { DoctorInfo, FormState } from '../../types';

interface Props {
  doctor: DoctorInfo;
  form: FormState;
  onDoctorChange: (field: keyof DoctorInfo, value: string) => void;
  onFormChange: (field: keyof FormState, value: string) => void;
}

// DD/MM/YYYY → YYYY-MM-DD (for the hidden date input)
function toIso(ddmmyyyy: string): string {
  const [d, m, y] = ddmmyyyy.split('/');
  if (!d || !m || !y || y.length !== 4) return '';
  return `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
}

// YYYY-MM-DD → DD/MM/YYYY
function fromIso(yyyymmdd: string): string {
  const [y, m, d] = yyyymmdd.split('-');
  if (!y || !m || !d) return '';
  return `${d}/${m}/${y}`;
}

export function DoctorSection({
  doctor,
  form,
  onDoctorChange,
  onFormChange,
}: Props) {
  const datePickerRef = useRef<HTMLInputElement>(null);

  const inputClass =
    'border border-slate-300 rounded-md px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent';

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="nome" className="text-sm font-medium text-slate-600">Nome do médico</label>
          <input
            id="nome"
            type="text"
            value={doctor.nome}
            onChange={e => onDoctorChange('nome', e.target.value)}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="cedula" className="text-sm font-medium text-slate-600">Cédula OM</label>
          <input
            id="cedula"
            type="text"
            value={doctor.cedula}
            onChange={e => onDoctorChange('cedula', e.target.value)}
            className={inputClass}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="mecanografico" className="text-sm font-medium text-slate-600">
            Mecanográfico
          </label>
          <input
            id="mecanografico"
            type="text"
            value={doctor.mecanografico}
            onChange={e => onDoctorChange('mecanografico', e.target.value)}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="data" className="text-sm font-medium text-slate-600">Data</label>
          <div className="relative">
            <input
              id="data"
              type="text"
              value={form.data}
              onChange={e => onFormChange('data', e.target.value)}
              className={`${inputClass} w-full pr-9`}
              placeholder="DD/MM/AAAA"
            />
            {/* Hidden native date picker — triggered by the calendar icon */}
            <input
              ref={datePickerRef}
              type="date"
              value={toIso(form.data)}
              onChange={e => onFormChange('data', fromIso(e.target.value))}
              className="absolute inset-0 opacity-0 pointer-events-none"
              tabIndex={-1}
            />
            <button
              type="button"
              onClick={() => datePickerRef.current?.showPicker()}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-sky-600 transition-colors"
              title="Abrir calendário"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* To re-enable: restore autorizacao + onAutorizacaoChange props and uncomment below */}
      {/* <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={autorizacao}
          onChange={e => onAutorizacaoChange(e.target.checked)}
          className="w-4 h-4 accent-sky-600"
        />
        <span className="text-sm text-slate-600">
          Pré-preencher a autorização do ato
        </span>
      </label> */}
    </div>
  );
}
