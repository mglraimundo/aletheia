import { useRef, useState } from 'react';
import type { FormState } from '../../types';
import { toIso, fromIso, isValidDateFormat } from '../../lib/dateUtils';

interface Props {
  form: FormState;
  onFormChange: (field: keyof FormState, value: string) => void;
}

const CalendarIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const XIcon = ({ size = 'w-3.5 h-3.5' }: { size?: string }) => (
  <svg className={size} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export function PatientSection({ form, onFormChange }: Props) {
  const datePickerRef = useRef<HTMLInputElement>(null);
  const repDatePickerRef = useRef<HTMLInputElement>(null);
  const [repOpen, setRepOpen] = useState(false);
  const [patientDateError, setPatientDateError] = useState(false);
  const [repDateError, setRepDateError] = useState(false);

  const inputClass =
    'border border-slate-300 rounded-md px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent';

  function closeRep() {
    setRepOpen(false);
    setRepDateError(false);
    onFormChange('legalRepName', '');
    onFormChange('legalRepDocNumber', '');
    onFormChange('legalRepDocDate', '');
    onFormChange('legalRepRelationship', '');
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="patientName" className="text-sm font-medium text-slate-600">Nome do Utente</label>
          <div className="relative">
            <input
              id="patientName"
              type="text"
              value={form.patientName}
              onChange={e => onFormChange('patientName', e.target.value)}
              className={`${inputClass} w-full ${form.patientName ? 'pr-7' : ''}`}
            />
            {form.patientName && (
              <button
                type="button"
                onClick={() => onFormChange('patientName', '')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                title="Limpar"
                aria-label="Limpar nome do utente"
              >
                <XIcon />
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="patientDate" className="text-sm font-medium text-slate-600">Data</label>
          <div className="relative">
            <input
              id="patientDate"
              type="text"
              value={form.patientDate}
              onChange={e => { setPatientDateError(false); onFormChange('patientDate', e.target.value); }}
              onBlur={() => setPatientDateError(!isValidDateFormat(form.patientDate))}
              className={`${inputClass} w-full ${form.patientDate ? 'pr-16' : 'pr-9'} ${patientDateError ? 'border-red-400 focus:ring-red-400' : ''}`}
              placeholder="DD/MM/AAAA"
            />
            <input
              ref={datePickerRef}
              type="date"
              value={toIso(form.patientDate)}
              onChange={e => { setPatientDateError(false); onFormChange('patientDate', fromIso(e.target.value)); }}
              className="absolute inset-0 opacity-0 pointer-events-none"
              tabIndex={-1}
            />
            {form.patientDate && (
              <button
                type="button"
                onClick={() => { setPatientDateError(false); onFormChange('patientDate', ''); }}
                className="absolute right-9 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                title="Limpar"
                aria-label="Limpar data do utente"
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
          {patientDateError && (
            <p className="text-xs text-red-500">Formato inválido — use DD/MM/AAAA</p>
          )}
        </div>
      </div>

      {!repOpen ? (
        <button
          type="button"
          onClick={() => setRepOpen(true)}
          className="self-start text-xs text-slate-400 hover:text-slate-600 transition-colors"
        >
          + Adicionar representante legal
        </button>
      ) : (
        <div className="mt-1 rounded-lg border border-slate-200 bg-slate-50 p-3 relative">
          <button
            type="button"
            onClick={closeRep}
            className="absolute right-2 top-2 text-slate-400 hover:text-slate-600 transition-colors"
            title="Remover representante legal"
            aria-label="Remover representante legal"
          >
            <XIcon />
          </button>
          <p className="text-xs font-medium text-slate-500 mb-3 uppercase tracking-wide">Representante Legal</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 flex flex-col gap-1">
              <label htmlFor="legalRepName" className="text-xs font-medium text-slate-500">Nome</label>
              <input
                id="legalRepName"
                type="text"
                value={form.legalRepName}
                onChange={e => onFormChange('legalRepName', e.target.value)}
                className={`${inputClass} w-full`}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="legalRepDocNumber" className="text-xs font-medium text-slate-500">Nº Documento de Identificação</label>
              <input
                id="legalRepDocNumber"
                type="text"
                value={form.legalRepDocNumber}
                onChange={e => onFormChange('legalRepDocNumber', e.target.value)}
                className={`${inputClass} w-full`}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="legalRepDocDate" className="text-xs font-medium text-slate-500">Data do Documento</label>
              <div className="relative">
                <input
                  id="legalRepDocDate"
                  type="text"
                  value={form.legalRepDocDate}
                  onChange={e => { setRepDateError(false); onFormChange('legalRepDocDate', e.target.value); }}
                  onBlur={() => setRepDateError(!isValidDateFormat(form.legalRepDocDate))}
                  className={`${inputClass} w-full ${form.legalRepDocDate ? 'pr-16' : 'pr-9'} ${repDateError ? 'border-red-400 focus:ring-red-400' : ''}`}
                  placeholder="DD/MM/AAAA"
                />
                <input
                  ref={repDatePickerRef}
                  type="date"
                  value={toIso(form.legalRepDocDate)}
                  onChange={e => { setRepDateError(false); onFormChange('legalRepDocDate', fromIso(e.target.value)); }}
                  className="absolute inset-0 opacity-0 pointer-events-none"
                  tabIndex={-1}
                />
                {form.legalRepDocDate && (
                  <button
                    type="button"
                    onClick={() => { setRepDateError(false); onFormChange('legalRepDocDate', ''); }}
                    className="absolute right-9 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    title="Limpar"
                    aria-label="Limpar data do documento"
                  >
                    <XIcon />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => repDatePickerRef.current?.showPicker?.()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-sky-600 transition-colors"
                  title="Abrir calendário"
                  aria-label="Abrir calendário"
                >
                  <CalendarIcon />
                </button>
              </div>
              {repDateError && (
                <p className="text-xs text-red-500">Formato inválido — use DD/MM/AAAA</p>
              )}
            </div>
            <div className="col-span-2 flex flex-col gap-1">
              <label htmlFor="legalRepRelationship" className="text-xs font-medium text-slate-500">Grau de parentesco ou tipo de representação</label>
              <input
                id="legalRepRelationship"
                type="text"
                value={form.legalRepRelationship}
                onChange={e => onFormChange('legalRepRelationship', e.target.value)}
                className={`${inputClass} w-full`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
