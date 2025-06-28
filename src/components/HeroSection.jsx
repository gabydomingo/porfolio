import { ArrowDown } from "lucide-react";
import { FondoEStrellas } from "./FondoEStrellas";
import MetaBalls from "./MetaBalls";

export const HeroSection = () => {
  return (
    <>
      {/* Fondo dinámico */}
      <FondoEStrellas />

      {/* MetaBalls en lado derecho */}
      <div className="absolute right-0 top-0 w-1/2 h-full z-0">
        <MetaBalls
          color="#8b5cf6"
          cursorBallColor="#6366f1"
          cursorBallSize={2}
          ballCount={15}
          animationSize={30}
          enableMouseInteraction={true}
          enableTransparency={true}
          hoverSmoothness={0.05}
          clumpFactor={1}
          speed={0.3}
        />
      </div>

      {/* Hero Section principal */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-start justify-center px-4 z-10"
      >
        <div className="container max-w-4xl mx-auto text-left md:ml-10 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">¡Hola! soy </span>
            <span className="text-[#6D28D9] opacity-0 animate-fade-in-delay-1">
              {" "}
              Gabriel
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Domingo
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-3">
            Soy desarrollador de software en formación, apasionado por la
            tecnología y con muchas ganas de seguir creciendo en el mundo IT.
            Actualmente finalizo la Tecnicatura en Desarrollo de Software en
            UADE, donde adquirí experiencia en bases de datos (creación,
            mantenimiento y edición), diseño web y desarrollo de aplicaciones.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              Mira mi trabajo
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce transition-opacity hover:opacity-80"
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </a>
      </section>
    </>
  );
};
