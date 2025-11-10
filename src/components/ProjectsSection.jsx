import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Analisis de datos AUSA",
    description:
      "Analisis exploratorio de datasets y limpieza de los mismos con pandas, aplicacion de algoritmo de machine learning y semiapp funcional para predecir severidad de siniestros. Ademas se hizo analisi en looker studio.",
      
    image: "./proyectos/ausa.png",
    tags: ["python", "pandas", "LookerStudio", "machine learning"],
    demoUrl:
      "https://lookerstudio.google.com/reporting/a67177eb-c4c4-4320-b3bd-4169fba868a2",
    githubUrl:
      "https://colab.research.google.com/drive/1Akj3H08Wwt4TvxYoQcmotAAHq2Ry4_iY?usp=sharing",
  },
  {
    id: 2,
    title: "Recalde Propiedades",
    description:
      "Website para una inmobiliaria de la costa trabaje en fullstack, desde diseño en figma, hasta back y frontend, consume api para mostrar videos en un mockup de celular al estilo tiktok. se trabajo en la version responsive tambien.",
      
    image: "./proyectos/recalde.png",
    tags: ["Next.js", "typescript", "api", "supabase", "vercel", "tailwind"],
    demoUrl:
      "https://recaldeinmobiliaria.com/",
    // githubUrl:
    //   "https://colab.research.google.com/drive/1Akj3H08Wwt4TvxYoQcmotAAHq2Ry4_iY?usp=sharing",
  },
  {
    id: 2,
    title: "Porfolio",
    description:
      "Mi porfolio personal desarrollado con React y TailwindCSS para mostrar mis proyectos y habilidades.",
    image: "/proyectos/porfolio-cap.png",
    tags: ["React", "TailwindCSS", "Lucide"],
    // demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Ecommerce de hardware",
    description:
      "Tienda de ecommerce con mapa para venta local, modelo 3D interactivo didáctico, chat con IA (en producción, se agregará carrito de compras).",
    image: "./proyectos/pczone-web-cap.png",
    tags: ["Next", "TailwindCSS", "Supabase", "Prisma", "TypeScript"],
    // demoUrl: "#",
    githubUrl: "https://github.com/pcZone-org/pczone-web",
  },
  {
    id: 5,
    title: "Constelaciones de recuerdo",
    description:
      "App móvil en Android Studio para visualizar constelaciones e historias usando API de la NASA y chat personalizado con Gemini.",
    image: "/proyectos/kotlin.png",
    tags: ["Kotlin", "Android Studio"],
    // demoUrl: "#",
    githubUrl: "https://github.com/gabydomingo/constelaciones_de_recuerdo",
  },
  {
    id: 6,
    title: "Challenge amigo secreto",
    description:
      "App simple hecha con JavaScript para sortear amigos secretos en un grupo de personas.",
    image: "./proyectos/amigo-secreto-cap.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl:
      "https://gabydomingo.github.io/ChallengeAmigoSecreto/",
    githubUrl:
      "https://github.com/gabydomingo/ChallengeAmigoSecreto?tab=readme-ov-file",
  },
  {
    id: 7,
    title: "Kumo Ramen",
    description:
      "Proyecto académico: login, manejo de base de datos con PHP, carga de productos, pedidos y jerarquías de usuarios.",
    image: "./proyectos/kumo-cap.png",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "xampp", "Ajax", "Jquery"],
    // demoUrl: "#",
    githubUrl: "https://github.com/gabydomingo/kumoRamen/tree/main/website",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary">Proyectos</span> destacados
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Aquí algunos de mis proyectos más destacados, donde he aplicado mis
          habilidades y conocimientos en desarrollo web y mobile.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/gabydomingo"
          >
            Revisa mi GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
