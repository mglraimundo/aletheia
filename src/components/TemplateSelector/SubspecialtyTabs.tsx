interface Props {
  subspecialties: string[];
  active: string | null;
  onChange: (s: string | null) => void;
}

export function SubspecialtyTabs({ subspecialties, active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange(null)}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
          active === null
            ? 'bg-sky-600 text-white'
            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
        }`}
      >
        Todos
      </button>
      {subspecialties.map(sub => (
        <button
          key={sub}
          onClick={() => onChange(sub)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            active === sub
              ? 'bg-sky-600 text-white'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          {sub}
        </button>
      ))}
    </div>
  );
}
