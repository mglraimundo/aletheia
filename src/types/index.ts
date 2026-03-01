export type EyeSelection =
  | 'od'
  | 'os'
  | 'ou-sequential'
  | 'ou-simultaneous'
  | '';

export const EYE_LABELS: Record<Exclude<EyeSelection, ''>, string> = {
  'od':               'Olho DIREITO',
  'os':               'Olho ESQUERDO',
  'ou-sequential':    'Olho DIREITO e ESQUERDO (bilateral sequencial)',
  'ou-simultaneous':  'Olho DIREITO e ESQUERDO (bilateral simultâneo)',
};

export const EYE_ORDER: Exclude<EyeSelection, ''>[] = [
  'od',
  'os',
  'ou-sequential',
  'ou-simultaneous',
];

export interface ConsentTemplate {
  id: string;
  name: string;
  subspecialty: string;
  aliases?: string[];        // hidden search terms (abbreviations, synonyms)
  fields: {
    diagnosis?: string;
    description?: string;
    benefits?: string;
    risks?: string;
    alternatives?: string;
    risksOfNoTreatment?: string;
  };
}

export interface DoctorInfo {
  name: string;
  licenseNumber: string;
  staffId: string;
}

export interface FormState {
  eye: EyeSelection;
  templateId: string;
  diagnosis: string;
  description: string;
  benefits: string;
  risks: string;
  alternatives: string;
  risksOfNoTreatment: string;
  date: string;
  patientName: string;
  patientDate: string;
  legalRepName: string;
  legalRepDocNumber: string;
  legalRepDocDate: string;       // DD/MM/YYYY
  legalRepRelationship: string;
}
