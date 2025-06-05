import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary">Mí</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Apasionado por la tecnología, el desarrollo web y la creación de
              soluciones reales.
            </h3>

            <p className="text-muted-foreground">
              Soy desarrollador de software en formación, con una fuerte
              motivación por seguir aprendiendo y aportar valor desde el primer
              día. Actualmente finalizo la Tecnicatura en Desarrollo de Software
              en UADE, donde adquirí experiencia sólida en bases de datos
              (creación, mantenimiento y edición), diseño web y desarrollo de
              aplicaciones. Gracias a experiencias laborales previas fuera del
              ámbito IT, también desarrollé habilidades fundamentales como el
              trabajo en equipo, liderazgo, resolución de problemas, pensamiento
              lógico y comunicación efectiva, todas altamente valoradas en
              entornos tecnológicos actuales.
            </p>

            <p className="text-muted-foreground">
              A lo largo de mi formación y proyectos personales trabajé con
              HTML, CSS, JavaScript, PHP, SQL (PostgreSQL y SQL Server), Python
              y Bootstrap. En la actualidad me encuentro enfocado en tecnologías
              modernas como <strong>Next.js</strong>, <strong>React</strong> y{" "}
              <strong>MongoDB</strong>, con el objetivo de construir soluciones
              escalables, atractivas y funcionales.
            </p>

            <p className="text-muted-foreground">
              Me destaco por mi capacidad de adaptación, compromiso y enfoque en
              resultados. Busco formar parte de un equipo donde pueda seguir
              creciendo profesionalmente, aportar mis conocimientos y aprender
              de quienes me rodean.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Contactame
              </a>

              <a
                href="/GabrielDomingoCV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                download
              >
                Descargar CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Desarrollo Web</h4>
                  <p className="text-muted-foreground">
                    Desarrollo de sitios y aplicaciones web modernas con foco en
                    experiencia de usuario, rendimiento y escalabilidad.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Trabajo en equipo</h4>
                  <p className="text-muted-foreground">
                    Comunicación, colaboración y disposición para aprender y
                    aportar en entornos ágiles y multidisciplinarios.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Bases de Datos</h4>
                  <p className="text-muted-foreground">
                    Experiencia práctica con SQL, modelado de datos y
                    mantenimiento de bases relacionales como PostgreSQL y SQL
                    Server.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
