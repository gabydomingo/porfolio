const enlaces = [
  { href: '#proyectos', texto: 'Proyectos' },
  { href: '#tecnologias', texto: 'Tecnologías' },
  { href: '#sobre-mi', texto: 'Sobre mí' },
  { href: '#contacto', texto: 'Contacto' },
];

export default function Nav({ isDark, toggleTheme }) {
  return (
    <nav className="nav-pill fixed top-[14px] left-1/2 z-50 flex max-w-[calc(100vw-20px)] -translate-x-1/2 items-center gap-0 overflow-x-auto rounded-full px-1.5 py-1.5 shadow-soft sm:gap-[2px] sm:px-[10px] sm:py-[6px]">
      {enlaces.map((e) => (
        <a
          key={e.href}
          href={e.href}
          className="shrink-0 rounded-full px-1.5 py-3 text-[13px] font-medium whitespace-nowrap hover:bg-viosoft sm:px-[11px] sm:py-[7px] sm:text-[13.5px]"
        >
          {e.texto}
        </a>
      ))}
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Cambiar tema"
        className="flex h-11 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-transparent text-txt hover:bg-viosoft sm:h-8"
      >
        {isDark ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          </svg>
        )}
      </button>
    </nav>
  );
}
