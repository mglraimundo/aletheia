import { useState } from 'react';

const TAB_KEY = 'aletheia_last_tab';
import type { ConsentTemplate } from '../../types';
import { ALL_TEMPLATES, SUBSPECIALTY_ORDER } from '../../templates';
import { SearchBar } from './SearchBar';
import { SubspecialtyTabs } from './SubspecialtyTabs';
import { TemplateCard } from './TemplateCard';

interface Props {
  onSelect: (t: ConsentTemplate) => void;
}

export function TemplateSelector({ onSelect }: Props) {
  const [query, setQuery] = useState('');
  const [activeSubspecialty, setActiveSubspecialty] = useState<string | null>(
    () => localStorage.getItem(TAB_KEY),
  );

  function handleTabChange(sub: string | null) {
    setActiveSubspecialty(sub);
    if (sub) localStorage.setItem(TAB_KEY, sub);
    else localStorage.removeItem(TAB_KEY);
  }

  const q = query.toLowerCase();

  const matchesQuery = (t: ConsentTemplate) =>
    !query ||
    t.name.toLowerCase().includes(q) ||
    t.subspecialty.toLowerCase().includes(q) ||
    t.aliases?.some(a => a.toLowerCase().includes(q));

  const filtered = ALL_TEMPLATES.filter(t => {
    const matchesSub = !activeSubspecialty || t.subspecialty === activeSubspecialty;
    return matchesQuery(t) && matchesSub;
  });

  // Respect SUBSPECIALTY_ORDER for display
  const subspecialties = SUBSPECIALTY_ORDER.filter(s =>
    ALL_TEMPLATES.some(t => t.subspecialty === s),
  );

  // Per-subspecialty match counts (only when a query is active)
  const queryCounts: Record<string, number> | undefined = query
    ? Object.fromEntries(
        subspecialties.map(s => [
          s,
          ALL_TEMPLATES.filter(t => t.subspecialty === s && matchesQuery(t)).length,
        ]),
      )
    : undefined;

  const showEmptyState = !query && activeSubspecialty === null;

  return (
    <section className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
      <div className="bg-sky-50 border-b border-sky-100 px-6 py-4">
        <h2 className="text-sm font-semibold text-sky-700 uppercase tracking-wide">
          Procedimento
        </h2>
      </div>
      <div className="p-6 flex flex-col gap-4">
        <SearchBar value={query} onChange={setQuery} />
        <SubspecialtyTabs
          subspecialties={subspecialties}
          active={activeSubspecialty}
          onChange={handleTabChange}
          counts={queryCounts}
        />
        {showEmptyState ? (
          <p className="text-sm text-slate-400 text-center py-8">
            Seleccione uma subespecialidade ou pesquise um procedimento.
          </p>
        ) : filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {filtered.map(t => (
              <TemplateCard key={t.id} template={t} onSelect={onSelect} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-slate-400 text-center py-4">
            Nenhum procedimento encontrado.
          </p>
        )}
      </div>
    </section>
  );
}
