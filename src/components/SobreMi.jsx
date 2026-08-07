export default function SobreMi() {
  return (
    <section
      id="sobre-mi"
      className="mx-auto w-full max-w-[920px] scroll-mt-[90px]"
    >
      <div className="reveal flex flex-wrap items-center gap-10">
        {/* 260x300 exactos: cuando llegue la foto no se corre el layout */}
        <div className="flex h-[300px] w-[260px] flex-none items-center justify-center rounded-2xl bg-[#e4e4e7] px-6 text-center text-[13px] text-[#52525b] shadow-card dark:bg-[#2a2733] dark:text-[#9b95ad]">
          <img src="img-GB.jpg" alt="Foto de Gaby Domingo" />
        </div>

        <div className="flex flex-[1_1_380px] flex-col gap-4">
          <h2 className="font-display m-0 text-[clamp(24px,3.2vw,30px)] font-bold tracking-[-0.02em]">
            Sobre mí
          </h2>
          <p className="m-0 text-[16px] leading-[1.7] text-sec [text-wrap:pretty]">
            Estoy terminando mi formacion de Desarrollo de Software en UADE,
            con el foco puesto en ciencia de datos. Vengo del desarrollo full
            stack freelance, y{' '}
            <strong className="text-txt">
              esa mezcla es la que me interesa aprovechar
            </strong>
            : sé procesar un dataset de millones de filas y también construir
            la arquitectura para que ese resultado impacte en el usuario final.
          </p>
          <p className="m-0 text-[16px] leading-[1.7] text-sec [text-wrap:pretty]">
            Mi experiencia previa gestionando integralmente un complejo de 24 departamentos
            me enseñó a liderar equipos y mediar entre distintas áreas. Al analizar métricas de ocupación, comprendí que{' '}
            <strong className="text-txt">
              los datos deben impulsar decisiones, no solo ser un registro
            </strong>
            . Esta etapa forjó mi perfil resolutivo, mi capacidad de adaptación y mi
            habilidad para comunicar información técnica de forma clara a cualquier público.
          </p>
          <p className="m-0 text-[16px] leading-[1.7] text-sec [text-wrap:pretty]">
            Actualmente busco sumarme a un equipo de datos. Me interesan{' '}
            <strong className="text-txt">
              los desafíos donde la información tiene consecuencias concretas
            </strong>{' '}
            —optimizar operaciones o asignar mejor un recurso— y los entornos
            dinámicos donde se debata el porqué de cada decisión técnica.
          </p>
        </div>
      </div>
    </section>
  );
}
