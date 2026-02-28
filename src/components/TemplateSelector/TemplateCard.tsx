import type { ConsentTemplate } from '../../types';

interface Props {
  template: ConsentTemplate;
  onSelect: (t: ConsentTemplate) => void;
}

export function TemplateCard({ template, onSelect }: Props) {
  return (
    <button
      onClick={() => onSelect(template)}
      className="text-left p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-sky-300 hover:shadow-md transition-all group"
    >
      <p className="font-semibold text-slate-800 text-sm group-hover:text-sky-700 leading-snug">
        {template.name}
      </p>
      <p className="text-xs text-slate-500 mt-1">{template.subspecialty}</p>
    </button>
  );
}
