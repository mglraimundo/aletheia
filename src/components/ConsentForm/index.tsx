import type { FormState, DoctorInfo, EyeSelection } from '../../types';
import { EyeSelector } from './EyeSelector';
import { ClinicalFields } from './ClinicalFields';
import { DoctorSection } from './DoctorSection';
import { ActionButtons } from './ActionButtons';

interface Props {
  form: FormState;
  doctor: DoctorInfo;
  onFormChange: (field: keyof FormState, value: FormState[keyof FormState]) => void;
  onEyeChange: (eye: EyeSelection) => void;
  onDoctorChange: (field: keyof DoctorInfo, value: string) => void;
  onClear: () => void;
  onPreview: () => Promise<void>;
  onPrint: () => Promise<void>;
}

export function ConsentForm({
  form,
  doctor,
  onFormChange,
  onEyeChange,
  onDoctorChange,
  onClear,
  onPreview,
  onPrint,
}: Props) {
  return (
    <section className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
      <div className="bg-sky-50 border-b border-sky-100 px-6 py-4 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-sky-700 uppercase tracking-wide">
            Consentimento Informado
          </h2>
          <p className="text-xs text-sky-600 mt-0.5">DGS 015/2013</p>
        </div>
        <button
          onClick={onClear}
          className="text-xs text-slate-500 hover:text-slate-700 bg-white border border-slate-300 hover:border-slate-400 rounded-md px-2.5 py-1 transition-colors"
        >
          Limpar
        </button>
      </div>
      <div className="p-6 flex flex-col gap-6">
        {/* Procedimento */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 border-t border-slate-200" />
            <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">
              Procedimento
            </span>
            <div className="flex-1 border-t border-slate-200" />
          </div>
          <div className="flex flex-col gap-6">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <EyeSelector value={form.eye} onChange={onEyeChange} />
            </div>
            <ClinicalFields
              form={form}
              onChange={(field, value) => onFormChange(field, value)}
            />
          </div>
        </div>

        {/* Doctor Section */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 border-t border-slate-200" />
            <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">
              Médico
            </span>
            <div className="flex-1 border-t border-slate-200" />
          </div>
          <DoctorSection
            doctor={doctor}
            form={form}
            onDoctorChange={onDoctorChange}
            onFormChange={(field, value) => onFormChange(field, value as FormState[typeof field])}
          />
        </div>

        {/* Action Buttons */}
        <div className="border-t border-slate-100 pt-4">
          <ActionButtons onPreview={onPreview} onPrint={onPrint} />
        </div>
      </div>
    </section>
  );
}
