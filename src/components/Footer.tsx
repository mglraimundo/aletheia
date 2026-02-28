const NOTE =
  'Conceito grego que significa verdade, revelação. Usado por Heidegger para descrever o acto de tornar visível o que estava oculto. No contexto do consentimento informado, representa a obrigação ética de revelar ao doente tudo o que precisa de saber.';

export function Footer() {
  return (
    <footer className="text-center flex flex-col gap-1 pt-2 pb-8">
      <div className="relative inline-flex justify-center group">
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[30rem] bg-slate-800 text-white text-xs rounded-2xl px-4 py-3 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          {NOTE}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800" />
        </div>
        <a
          href="https://github.com/mglraimundo/aletheia"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-slate-500 hover:text-sky-600 transition-colors"
        >
          Aletheia
        </a>
      </div>
      <p className="text-xs text-slate-400">Desenvolvido por Miguel Raimundo</p>
    </footer>
  );
}
