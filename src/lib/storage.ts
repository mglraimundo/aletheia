import type { DoctorInfo, FormState } from '../types';

const DOCTOR_KEY = 'aletheia_doctor_info';
const FORM_KEY = 'aletheia_form_state';

// Fields persisted across sessions (clinical content + procedure selection).
// Patient PII (name, dates, legal rep) is intentionally session-only.
type PersistedFormFields = Pick<FormState,
  'eye' | 'templateId' | 'diagnosis' | 'description' | 'benefits' | 'risks' | 'alternatives' | 'risksOfNoTreatment'
>;

export function loadDoctorInfo(): DoctorInfo {
  try {
    const raw = localStorage.getItem(DOCTOR_KEY);
    if (raw) return JSON.parse(raw) as DoctorInfo;
  } catch {
    // ignore
  }
  return { name: '', licenseNumber: '', staffId: '' };
}

export function saveDoctorInfo(info: DoctorInfo): void {
  try {
    localStorage.setItem(DOCTOR_KEY, JSON.stringify(info));
  } catch {
    // ignore
  }
}

export function loadFormState(): Partial<PersistedFormFields> {
  try {
    const raw = localStorage.getItem(FORM_KEY);
    if (raw) return JSON.parse(raw) as Partial<PersistedFormFields>;
  } catch {
    // ignore
  }
  return {};
}

export function saveFormState(form: FormState): void {
  const persisted: PersistedFormFields = {
    eye:                form.eye,
    templateId:         form.templateId,
    diagnosis:          form.diagnosis,
    description:        form.description,
    benefits:           form.benefits,
    risks:              form.risks,
    alternatives:       form.alternatives,
    risksOfNoTreatment: form.risksOfNoTreatment,
  };
  try {
    localStorage.setItem(FORM_KEY, JSON.stringify(persisted));
  } catch {
    // ignore
  }
}
