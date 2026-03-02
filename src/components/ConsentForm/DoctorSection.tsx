import { useRef, useState } from 'react';
import type { DoctorInfo, FormState } from '../../types';
import { toIso, fromIso, isValidDateFormat } from '../../lib/dateUtils';

interface Props {
  doctor: DoctorInfo;
  form: FormState;
  onDoctorChange: (field: keyof DoctorInfo, value: string) => void;
  onFormChange: (field: keyof FormState, value: string) => void;
}

const XIcon = ({ size = 'w-3.5 h-3.5' }: { size?: string }) => (
  <svg className={size} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export function DoctorSection({
  doctor,
  form,
  onDoctorChange,
  onFormChange,
}: Props) {
  const datePickerRef = useRef<HTMLInputElement>(null);
  const [dateError, setDateError] = useState(false);

  const inputClass =
    'border border-slate-300 rounded-md px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent';

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-medium text-slate-600">Nome do Médico</label>
          <input
            id="name"
            type="text"
            value={doctor.name}
            onChange={e => onDoctorChange('name', e.target.value)}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="licenseNumber" className="text-sm font-medium text-slate-600">Nº Cédula OM</label>
          <input
            id="licenseNumber"
            type="text"
            value={doctor.licenseNumber}
            onChange={e => onDoctorChange('licenseNumber', e.target.value)}
            className={inputClass}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="staffId" className="text-sm font-medium text-slate-600">
            Nº Mecanográfico
          </label>
          <input
            id="staffId"
            type="text"
            value={doctor.staffId}
            onChange={e => onDoctorChange('staffId', e.target.value)}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="date" className="text-sm font-medium text-slate-600">Data</label>
          <div className="relative">
            <input
              id="date"
              type="text"
              value={form.date}
              onChange={e => { setDateError(false); onFormChange('date', e.target.value); }}
              onBlur={() => setDateError(!isValidDateFormat(form.date))}
              className={`${inputClass} w-full ${form.date ? 'pr-16' : 'pr-9'} ${dateError ? 'border-red-400 focus:ring-red-400' : ''}`}
              placeholder="DD/MM/AAAA"
            />
            {/* Hidden native date picker — triggered by the calendar icon */}
            <input
              ref={datePickerRef}
              type="date"
              value={toIso(form.date)}
              onChange={e => { setDateError(false); onFormChange('date', fromIso(e.target.value)); }}
              className="absolute inset-0 opacity-0 pointer-events-none"
              tabIndex={-1}
            />
            {form.date && (
              <button
                type="button"
                onClick={() => { setDateError(false); onFormChange('date', ''); }}
                className="absolute right-9 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                title="Limpar"
                aria-label="Limpar data"
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
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </button>
          </div>
          {dateError && (
            <p className="text-xs text-red-500">Formato inválido — use DD/MM/AAAA</p>
          )}
        </div>
      </div>
    </div>
  );
}
