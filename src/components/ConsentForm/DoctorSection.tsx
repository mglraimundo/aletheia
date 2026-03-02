import type { DoctorInfo, FormState } from '../../types';
import { DateField } from '../ui/DateField';

interface Props {
  doctor: DoctorInfo;
  form: FormState;
  onDoctorChange: (field: keyof DoctorInfo, value: string) => void;
  onFormChange: (field: keyof FormState, value: string) => void;
}

export function DoctorSection({
  doctor,
  form,
  onDoctorChange,
  onFormChange,
}: Props) {
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
        <DateField
          id="date"
          label="Data"
          value={form.date}
          onChange={v => onFormChange('date', v)}
          clearAriaLabel="Limpar data"
        />
      </div>
    </div>
  );
}
