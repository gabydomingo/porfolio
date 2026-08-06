import Tag from './Tag';
import { destacados } from '../data/proyectos';

const enlaceBase =
  'inline-flex items-center gap-[7px] rounded-xl px-4 py-[9px] text-[13.5px] font-semibold transition-transform duration-200 hover:-translate-y-px';

function Bloque({ titulo, children }) {
  return (
    <p className="m-0 text-[14.5px] leading-[1.6] text-sec">
      <strong className="text-txt">{titulo}</strong> {children}
    </p>
  );
}

export default function ProyectosDestacados() {
  return (
    <section
      id="proyectos"
      className="mx-auto flex w-full max-w-[1120px] scroll-mt-[90px] flex-col gap-16"
    >
      <h2 className="reveal font-display m-0 text-[clamp(28px,4vw,40px)] font-extrabold tracking-[-0.025em]">
        Proyectos destacados
      </h2>

      {destacados.map((p, i) => (
        <article
          key={p.id}
          className={`reveal pcard flex flex-wrap items-stretch gap-9 ${
            i % 2 === 1 ? 'flex-row-reverse' : ''
          }`}
        >
          <div
            className="relative min-w-[280px] flex-[1_1_440px] overflow-hidden rounded-2xl shadow-card"
            style={{ minHeight: `${p.altoMin}px` }}
          >
            <div className="pzoom absolute inset-0">
              {p.imagen ? (
                <img
                  src={p.imagen}
                  alt={p.titulo}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[#e4e4e7] px-6 text-center text-[13px] text-[#52525b] dark:bg-[#2a2733] dark:text-[#9b95ad]">
                  {p.placeholder}
                </div>
              )}
            </div>
          </div>

          <div className="flex min-w-[280px] flex-[1_1_400px] flex-col justify-center gap-4">
            <h3 className="font-display m-0 text-2xl leading-[1.2] font-bold tracking-[-0.02em]">
              {p.titulo}
            </h3>

            <Bloque titulo="El problema.">{p.problema}</Bloque>
            <Bloque titulo="Los datos.">{p.datos}</Bloque>
            <Bloque titulo="Cómo lo resolví.">{p.solucion}</Bloque>

            <div className="rounded-2xl bg-surf px-5 py-[18px] shadow-soft">
              <div className="font-mono text-[clamp(17px,2.4vw,21px)] font-semibold tracking-[-0.01em] text-green">
                {p.resultado.titular}
              </div>
              <p className="mt-[10px] mb-0 text-[14px] leading-[1.6] text-sec">
                {p.resultado.detalle}
              </p>
            </div>

            <div className="flex flex-wrap gap-[7px]">
              {p.tags.map((t) => (
                <Tag key={t} nombre={t} />
              ))}
            </div>

            <div className="mt-[2px] flex flex-wrap gap-[10px]">
              {p.enlaces.map((e) => (
                <a
                  key={e.texto}
                  href={e.href}
                  className={`${enlaceBase} ${
                    e.principal
                      ? 'bg-vio text-white hover:text-white'
                      : 'bg-surf shadow-soft'
                  }`}
                >
                  {e.texto}
                </a>
              ))}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
