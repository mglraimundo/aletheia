interface Props {
  subspecialties: string[];
  active: string | null;
  onChange: (s: string | null) => void;
  counts?: Record<string, number>;
}

export function SubspecialtyTabs({ subspecialties, active, onChange, counts }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {subspecialties.map(sub => {
        const count = counts?.[sub];
        const isZero = counts !== undefined && count === 0;
        const isActive = active === sub;

        return (
          <button
            key={sub}
            onClick={() => {
              if (isZero) return;
              onChange(isActive ? null : sub);
            }}
            disabled={isZero}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              isActive
                ? 'bg-sky-600 text-white'
                : isZero
                  ? 'bg-slate-100 text-slate-400 opacity-40 cursor-not-allowed'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {sub}
            {counts !== undefined && (
              <span
                className={`inline-flex items-center justify-center rounded-full text-xs leading-none px-1.5 py-0.5 ${
                  isActive
                    ? 'bg-white/25 text-white'
                    : 'bg-slate-300 text-slate-600'
                }`}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
