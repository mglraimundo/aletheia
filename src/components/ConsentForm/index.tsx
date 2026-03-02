import type { FormState, DoctorInfo, EyeSelection } from '../../types';
import { EyeSelector } from './EyeSelector';
import { ClinicalFields, hasClinicalOverflow } from './ClinicalFields';
import { DoctorSection } from './DoctorSection';
import { PatientSection } from './PatientSection';
import { ActionButtons } from './ActionButtons';

interface Props {
  form: FormState;
  doctor: DoctorInfo;
  onFormChange: (field: keyof FormState, value: string) => void;
  onEyeChange: (eye: EyeSelection) => void;
  onDoctorChange: (field: keyof DoctorInfo, value: string) => void;
  onClear: () => void;
  onDownload: () => Promise<void>;
  onPrint: () => Promise<void>;
  calibrateMode?: boolean;
  onCalibrate?: () => Promise<void>;
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="flex-1 border-t border-slate-200" />
      <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">
        {label}
      </span>
      <div className="flex-1 border-t border-slate-200" />
    </div>
  );
}

export function ConsentForm({
  form,
  doctor,
  onFormChange,
  onEyeChange,
  onDoctorChange,
  onClear,
  onDownload,
  onPrint,
  calibrateMode,
  onCalibrate,
}: Props) {
  return (
    <section className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
      <div className="bg-sky-50 border-b border-sky-100 px-6 py-4 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-sky-700 uppercase tracking-wide">
            Consentimento Informado
          </h2>
          <p className="text-xs text-sky-600 mt-0.5">Norma DGS nº 015/2013</p>
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
          <SectionDivider label="Procedimento" />
          <div className="flex flex-col gap-6">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <EyeSelector value={form.eye} onChange={onEyeChange} />
            </div>
            <ClinicalFields
              form={form}
              onChange={onFormChange}
            />
          </div>
        </div>

        {/* Doctor Section */}
        <div>
          <SectionDivider label="Médico" />
          <DoctorSection
            doctor={doctor}
            form={form}
            onDoctorChange={onDoctorChange}
            onFormChange={onFormChange}
          />
        </div>

        {/* Patient Section */}
        <div>
          <SectionDivider label="Utente" />
          <PatientSection
            form={form}
            onFormChange={onFormChange}
          />
        </div>

        {/* Action Buttons */}
        <div className="border-t border-slate-100 pt-4">
          <ActionButtons form={form} onDownload={onDownload} onPrint={onPrint} disabled={hasClinicalOverflow(form)} calibrateMode={calibrateMode} onCalibrate={onCalibrate} />
        </div>
      </div>
    </section>
  );
}
