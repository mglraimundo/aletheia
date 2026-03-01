import type { FormState } from '../../types';
import { Textarea } from '../ui/Textarea';

interface Props {
  form: FormState;
  onChange: (field: keyof FormState, value: string) => void;
  required?: boolean;
}

export const CLINICAL_FIELDS_CONFIG: { key: keyof FormState; label: string; maxChars: number }[] = [
  { key: 'diagnosis',           label: 'Diagnóstico e/ou descrição da situação clínica',                          maxChars:  950 },
  { key: 'description',         label: 'Descrição do ato/intervenção, sua natureza e objetivo',                   maxChars:  950 },
  { key: 'benefits',            label: 'Benefícios',                                                              maxChars:  950 },
  { key: 'risks',               label: 'Riscos graves e riscos frequentes',                                        maxChars:  800 },
  { key: 'alternatives',        label: 'Atos/intervenções alternativas fiáveis e cientificamente reconhecidas',    maxChars:  800 },
  { key: 'risksOfNoTreatment',  label: 'Riscos de não tratamento',                                                maxChars:  800 },
];

export function hasClinicalOverflow(form: FormState): boolean {
  return CLINICAL_FIELDS_CONFIG.some(({ key, maxChars }) => (form[key] as string).length > maxChars);
}

export function ClinicalFields({ form, onChange, required }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {CLINICAL_FIELDS_CONFIG.map(({ key, label, maxChars }) => (
        <Textarea
          key={key}
          id={key}
          label={label}
          value={form[key] as string}
          onChange={e => onChange(key, e.target.value.replace(/[\r\n]+/g, ' '))}
          rows={3}
          required={required}
          charLimit={maxChars}
        />
      ))}
    </div>
  );
}
