import Tag from './Tag';
import { destacados } from '../data/proyectos';
import { t, textos } from '../data/textos';

const enlaceBase =
  'boton inline-flex items-center gap-[7px] rounded-xl px-4 py-[9px] text-[13.5px] font-semibold transition-transform duration-200 hover:-translate-y-px';

function Bloque({ titulo, children }) {
  return (
    <p className="m-0 text-[14.5px] leading-[1.6] text-sec">
      <strong className="text-txt">{titulo}</strong> {children}
    </p>
  );
}

export default function ProyectosDestacados({ idioma }) {
  return (
    <section
      id="proyectos"
      className="mx-auto flex w-full max-w-[1120px] scroll-mt-[90px] flex-col gap-16"
    >
      <h2 className="reveal font-display m-0 text-[clamp(28px,4vw,40px)] font-extrabold tracking-[-0.025em]">
        {t(textos.secciones.destacados, idioma)}
      </h2>

      {destacados.map((p, i) => (
        <article key={p.id} className="reveal pcard flex flex-col gap-6">
          <h3 className="font-display m-0 text-2xl leading-[1.2] font-bold tracking-[-0.02em]">
            {t(p.titulo, idioma)}
          </h3>

          <div className="relative aspect-[2/1] overflow-hidden rounded-2xl shadow-card">
            <div className="pzoom absolute inset-0">
              {p.imagen ? (
                <img
                  src={p.imagen}
                  alt={t(p.titulo, idioma)}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[#e4e4e7] px-6 text-center text-[13px] text-[#52525b] dark:bg-[#2a2733] dark:text-[#9b95ad]">
                  {t(p.placeholder, idioma)}
                </div>
              )}
            </div>
          </div>

          {/* Dos columnas recién desde lg: abajo el texto queda en una sola,
              que es como ya se veía apilado */}
          <div className="grid gap-x-9 gap-y-4 lg:grid-cols-2">
            <div
              className={`flex flex-col gap-4 ${i % 2 === 1 ? 'lg:order-2' : ''}`}
            >
              <Bloque titulo={t(textos.bloques.problema, idioma)}>
                {t(p.problema, idioma)}
              </Bloque>
              <Bloque titulo={t(textos.bloques.datos, idioma)}>
                {t(p.datos, idioma)}
              </Bloque>
            </div>

            <div className="flex flex-col gap-4">
              <Bloque titulo={t(textos.bloques.solucion, idioma)}>
                {t(p.solucion, idioma)}
              </Bloque>
              <div className="rounded-2xl bg-surf px-5 py-[18px] shadow-soft">
                <div className="font-mono text-[clamp(17px,2.4vw,21px)] font-semibold tracking-[-0.01em] text-green">
                  {t(p.resultado.titular, idioma)}
                </div>
                <p className="mt-[10px] mb-0 text-[14px] leading-[1.6] text-sec">
                  {t(p.resultado.detalle, idioma)}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-[7px]">
            {p.tags.map((tec) => (
              <Tag key={tec} nombre={tec} />
            ))}
          </div>

          <div className="flex flex-wrap gap-[10px]">
            {p.enlaces.map((e) => {
              const externo = e.href.startsWith('http');
              return (
                <a
                  key={e.href}
                  href={e.href}
                  target={externo ? '_blank' : undefined}
                  rel={externo ? 'noopener' : undefined}
                  className={`${enlaceBase} ${
                    e.principal ? 'bg-vio text-white' : 'bg-surf shadow-soft'
                  }`}
                >
                  {t(e.texto, idioma)}
                </a>
              );
            })}
          </div>
        </article>
      ))}
    </section>
  );
}
