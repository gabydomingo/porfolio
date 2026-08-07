import { t, textos } from '../data/textos';

function Parrafo({ bloque, idioma }) {
  return (
    <p className="m-0 text-[16px] leading-[1.7] text-sec [text-wrap:pretty]">
      {t(bloque.antes, idioma)}
      <strong className="text-txt">{t(bloque.fuerte, idioma)}</strong>
      {t(bloque.despues, idioma)}
    </p>
  );
}

export default function SobreMi({ idioma }) {
  return (
    <section
      id="sobre-mi"
      className="mx-auto w-full max-w-[920px] scroll-mt-[90px]"
    >
      <div className="reveal flex flex-wrap items-center gap-10">
        {/* 260x300 exactos, con la foto recortada para llenarlos */}
        <div className="h-[300px] w-[260px] flex-none overflow-hidden rounded-2xl shadow-card">
          <img
            src="/proyectos/img-GB.jpg"
            alt={t(textos.sobreMi.foto, idioma)}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-[1_1_380px] flex-col gap-4">
          <h2 className="font-display m-0 text-[clamp(24px,3.2vw,30px)] font-bold tracking-[-0.02em]">
            {t(textos.secciones.sobreMi, idioma)}
          </h2>
          <Parrafo bloque={textos.sobreMi.p1} idioma={idioma} />
          <Parrafo bloque={textos.sobreMi.p2} idioma={idioma} />
          <Parrafo bloque={textos.sobreMi.p3} idioma={idioma} />
        </div>
      </div>
    </section>
  );
}
