interface Props {
  value: string;
  onChange: (v: string) => void;
}

export function SearchBar({ value, onChange }: Props) {
  return (
    <div className="relative">
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
        fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
      >
        <circle cx={11} cy={11} r={8} />
        <path strokeLinecap="round" d="m21 21-4.35-4.35" />
      </svg>
      <input
        type="text"
        placeholder="Pesquisar procedimento..."
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full pl-9 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
      />
    </div>
  );
}
