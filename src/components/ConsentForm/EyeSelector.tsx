import type { EyeSelection } from '../../types';
import { EYE_ORDER } from '../../types';

const EYE_DISPLAY: Record<Exclude<EyeSelection, ''>, string> = {
  'direito':               'Direito',
  'esquerdo':              'Esquerdo',
  'bilateral-sequencial':  'Bilateral (sequencial)',
  'bilateral-simultaneo':  'Bilateral (simultâneo)',
};

interface Props {
  value: EyeSelection;
  onChange: (v: EyeSelection) => void;
}

export function EyeSelector({ value, onChange }: Props) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="text-sm font-medium text-slate-600 mb-1">Olho(s)</legend>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {EYE_ORDER.map(eye => (
          <label key={eye} className="flex items-center gap-2 cursor-pointer text-sm text-slate-700">
            <input
              type="radio"
              name="eye"
              value={eye}
              checked={value === eye}
              onChange={() => onChange(eye)}
              className="accent-sky-600"
            />
            {EYE_DISPLAY[eye]}
          </label>
        ))}
        <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-500">
          <input
            type="radio"
            name="eye"
            value=""
            checked={value === ''}
            onChange={() => onChange('')}
            className="accent-sky-600"
          />
          — Não especificar
        </label>
      </div>
    </fieldset>
  );
}
