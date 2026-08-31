import type { FormState } from '../../types';
import { Textarea } from '../ui/Textarea';
import { CLINICAL_FIELDS_CONFIG } from './clinicalFieldConfig';

interface Props {
  form: FormState;
  onChange: (field: keyof FormState, value: string) => void;
}

export function ClinicalFields({ form, onChange }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {CLINICAL_FIELDS_CONFIG.map(({ key, label, maxChars }) => (
        <Textarea
          key={key}
          id={key}
          label={label}
          value={form[key]}
          onChange={e => onChange(key, e.target.value.replace(/[\r\n]+/g, ' '))}
          rows={3}
          charLimit={maxChars}
        />
      ))}
    </div>
  );
}
