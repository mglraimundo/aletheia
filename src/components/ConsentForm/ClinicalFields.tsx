import type { FormState } from '../../types';
import { Textarea } from '../ui/Textarea';

interface Props {
  form: FormState;
  onChange: (field: keyof FormState, value: string) => void;
  required?: boolean;
}

const FIELDS: { key: keyof FormState; label: string }[] = [
  { key: 'diagnostico',         label: 'Diagnóstico e/ou descrição da situação clínica' },
  { key: 'descricao',           label: 'Descrição do ato/intervenção, sua natureza e objetivo' },
  { key: 'beneficios',          label: 'Benefícios' },
  { key: 'riscos',              label: 'Riscos graves e riscos frequentes' },
  { key: 'atos',                label: 'Atos/intervenções alternativas fiáveis e cientificamente reconhecidas' },
  { key: 'riscosNaoTratamento', label: 'Riscos de não tratamento' },
];

export function ClinicalFields({ form, onChange, required }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {FIELDS.map(({ key, label }) => (
        <Textarea
          key={key}
          id={key}
          label={label}
          value={form[key] as string}
          onChange={e => onChange(key, e.target.value)}
          rows={3}
          required={required}
        />
      ))}
    </div>
  );
}
