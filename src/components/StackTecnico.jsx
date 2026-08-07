import Tag from './Tag';
import { grupos } from '../data/stack';
import { t, textos } from '../data/textos';

const iconos = {
  analisis: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 14l4-4 3 3 5-6" />
    </>
  ),
  datos: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
  bi: (
    <>
      <rect x="3" y="12" width="4" height="8" rx="1" />
      <rect x="10" y="7" width="4" height="13" rx="1" />
      <rect x="17" y="3" width="4" height="17" rx="1" />
    </>
  ),
  desarrollo: <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />,
};

export default function StackTecnico({ idioma }) {
  return (
    <section
      id="tecnologias"
      className="mx-auto flex w-full max-w-[920px] scroll-mt-[90px] flex-col gap-[26px]"
    >
      <h2 className="reveal font-display m-0 text-[clamp(24px,3.2vw,30px)] font-bold tracking-[-0.02em]">
        {t(textos.secciones.stack, idioma)}
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[22px]">
        {grupos.map((g) => (
          <div
            key={g.id}
            className="reveal flex flex-col gap-[14px] rounded-2xl bg-surf px-6 py-[22px] shadow-soft"
          >
            <div className="flex items-center gap-[11px]">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-viosoft text-vio">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {iconos[g.id]}
                </svg>
              </span>
              <h3 className="font-display m-0 text-[16px] font-bold tracking-[-0.01em]">
                {t(g.titulo, idioma)}
              </h3>
            </div>

            <div className="flex flex-wrap gap-[7px]">
              {g.tags.map((tec) => (
                <Tag key={tec} nombre={tec} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
