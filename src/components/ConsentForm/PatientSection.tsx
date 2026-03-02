import { useState } from 'react';
import type { FormState } from '../../types';
import { XIcon } from '../ui/Icons';
import { DateField } from '../ui/DateField';

interface Props {
  form: FormState;
  onFormChange: (field: keyof FormState, value: string) => void;
}

export function PatientSection({ form, onFormChange }: Props) {
  const [repOpen, setRepOpen] = useState(false);

  const inputClass =
    'border border-slate-300 rounded-md px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent';

  function closeRep() {
    setRepOpen(false);
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
        <DateField
          id="patientDate"
          label="Data"
          value={form.patientDate}
          onChange={v => onFormChange('patientDate', v)}
          clearAriaLabel="Limpar data do utente"
        />
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
            <DateField
              key={repOpen ? 'open' : 'closed'}
              id="legalRepDocDate"
              label="Data do Documento"
              value={form.legalRepDocDate}
              onChange={v => onFormChange('legalRepDocDate', v)}
              labelClassName="text-xs font-medium text-slate-500"
              clearAriaLabel="Limpar data do documento"
            />
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
