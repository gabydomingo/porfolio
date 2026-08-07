import Tag from './Tag';
import { web } from '../data/proyectos';

const enlaceBase =
  'boton inline-flex items-center gap-[7px] rounded-xl px-[14px] py-2 text-[13px] font-semibold transition-transform duration-200 hover:-translate-y-px';

export default function DesarrolloWeb() {
  return (
    <section className="mx-auto flex w-full max-w-[920px] flex-col gap-7">
      <div className="reveal flex flex-col gap-3">
        <h2 className="font-display m-0 text-[clamp(24px,3.2vw,30px)] font-bold tracking-[-0.02em]">
          Desarrollo web
        </h2>
        <p className="m-0 max-w-[640px] text-[16px] leading-[1.65] text-sec [text-wrap:pretty]">
          Antes de dedicarme a los datos trabajé como desarrollador full stack.
          Estos proyectos son la razón por la que puedo llevar un modelo desde
          el notebook hasta un sitio funcionando.
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[22px]">
        {web.map((p) => (
          <article
            key={p.id}
            className="reveal pcard flex flex-col overflow-hidden rounded-2xl bg-surf shadow-soft transition-[transform,box-shadow] duration-[250ms] hover:-translate-y-1 hover:shadow-card"
          >
            <div className="relative h-40 overflow-hidden">
              <div className="pzoom absolute inset-0">
                {p.imagen ? (
                  <img
                    src={p.imagen}
                    alt={p.nombre}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#e4e4e7] px-4 text-center text-[13px] text-[#52525b] dark:bg-[#2a2733] dark:text-[#9b95ad]">
                    {p.placeholder}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-[9px] px-5 pt-[18px] pb-5">
              <h3 className="font-display m-0 text-[17px] font-bold tracking-[-0.01em]">
                {p.nombre}
              </h3>
              <p className="m-0 text-[14px] leading-[1.55] text-sec">
                {p.descripcion}
              </p>
              <div className="mt-1 flex flex-wrap gap-[6px]">
                {p.tags.map((t) => (
                  <Tag key={t} nombre={t} variante="suave" />
                ))}
              </div>

              <div className="mt-2 flex flex-wrap gap-2">
                {p.enlaces.map((e) => (
                  <a
                    key={e.texto}
                    href={e.href}
                    target="_blank"
                    rel="noopener"
                    className={`${enlaceBase} ${
                      e.principal ? 'bg-vio text-white' : 'bg-tagbg shadow-soft'
                    }`}
                  >
                    {e.texto}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
