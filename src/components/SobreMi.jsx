export default function SobreMi() {
  return (
    <section
      id="sobre-mi"
      className="mx-auto w-full max-w-[920px] scroll-mt-[90px]"
    >
      <div className="reveal flex flex-wrap items-center gap-10">
        {/* 260x300 exactos: cuando llegue la foto no se corre el layout */}
        <div className="flex h-[300px] w-[260px] flex-none items-center justify-center rounded-2xl bg-[#e4e4e7] px-6 text-center text-[13px] text-[#52525b] shadow-card dark:bg-[#2a2733] dark:text-[#9b95ad]">
          Foto de Gabriel
        </div>

        <div className="flex flex-[1_1_380px] flex-col gap-4">
          <h2 className="font-display m-0 text-[clamp(24px,3.2vw,30px)] font-bold tracking-[-0.02em]">
            Sobre mí
          </h2>
          <p className="m-0 text-[16px] leading-[1.7] text-sec [text-wrap:pretty]">
            Estoy terminando la Tecnicatura en Desarrollo de Software en UADE,
            con el foco puesto en ciencia de datos. Vengo del desarrollo full
            stack freelance, y{' '}
            <strong className="text-txt">
              esa mezcla es la que me interesa aprovechar
            </strong>
            : sé limpiar un dataset de millones de filas y también sé qué hacer
            después para que el resultado le llegue a alguien.
          </p>
          <p className="m-0 text-[16px] leading-[1.7] text-sec [text-wrap:pretty]">
            Antes de dedicarme a la programación estuve a cargo de un edificio
            de 24 departamentos: reservas, cobros, mantenimiento y un equipo a
            mi cargo, haciendo de puente entre los empleados y el dueño. Llevaba
            la ocupación en Excel y ahí empecé a ver que{' '}
            <strong className="text-txt">
              un número sirve para decidir algo, no solo para quedar registrado
            </strong>
            . De esa etapa me quedó saber traducir entre el que opera y el que
            decide, que en datos es la mitad del trabajo.
          </p>
          <p className="m-0 text-[16px] leading-[1.7] text-sec [text-wrap:pretty]">
            Busco mi primer puesto en un equipo de datos. Me interesan{' '}
            <strong className="text-txt">
              los problemas donde el dato tiene consecuencias concretas
            </strong>{' '}
            —una decisión de operación, un recurso que se asigna mejor— y los
            equipos donde se pueda discutir el porqué de cada decisión técnica.
          </p>
        </div>
      </div>
    </section>
  );
}
