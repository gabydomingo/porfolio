// Cada texto lleva sus dos idiomas juntos, no en archivos paralelos: si falta
// una traducción se ve en el renglón de al lado, y sumar un proyecto sigue
// siendo tocar un solo archivo.
//
// Los párrafos con una negrita en el medio se parten en antes / fuerte /
// después, porque el <strong> no puede viajar dentro de un string.
export const textos = {
  cv: {
    es: '/DomingoGabrielCV.pdf',
    en: '/DomingoGabrielCV-en.pdf',
  },

  nav: {
    proyectos: { es: 'Proyectos', en: 'Projects' },
    stack: { es: 'Stack', en: 'Stack' },
    sobreMi: { es: 'Sobre mí', en: 'About' },
    contacto: { es: 'Contacto', en: 'Contact' },
    cambiarTema: { es: 'Cambiar tema', en: 'Switch theme' },
  },

  hero: {
    badge: { es: 'Disponible para trabajar', en: 'Open to work' },
    titulo: { es: 'Hola, soy Gabriel', en: "Hi, I'm Gabriel" },
    intro: {
      antes: {
        es: 'Analista de datos y desarrollador de Buenos Aires. ',
        en: 'Data analyst and developer based in Buenos Aires. ',
      },
      fuerte: {
        es: 'Construyo pipelines de datos de punta a punta',
        en: 'I build end-to-end data pipelines',
      },
      despues: {
        es: ': extraigo, proceso, modelo y dejo el resultado funcionando en la nube.',
        en: ': I extract, process, model and ship the result running in the cloud.',
      },
    },
    verProyectos: { es: 'Ver proyectos', en: 'See projects' },
    descargarCv: { es: 'Descargar CV', en: 'Download CV' },
  },

  metricas: {
    registros: { es: 'registros procesados', en: 'records processed' },
    modelos: { es: 'modelos entrenados', en: 'models trained' },
    apps: { es: 'apps en producción', en: 'apps in production' },
    dashboards: { es: 'dashboards de BI', en: 'BI dashboards' },
  },

  secciones: {
    destacados: { es: 'Proyectos destacados', en: 'Featured projects' },
    web: { es: 'Desarrollo web', en: 'Web development' },
    formacion: { es: 'Proyectos de formación', en: 'Coursework projects' },
    stack: { es: 'Stack técnico', en: 'Tech stack' },
    sobreMi: { es: 'Sobre mí', en: 'About me' },
    certificaciones: { es: 'Certificaciones', en: 'Certifications' },
    contacto: { es: 'Hablemos', en: "Let's talk" },
  },

  // Los rótulos en negrita de cada franja de proyecto destacado
  bloques: {
    problema: { es: 'El problema.', en: 'The problem.' },
    datos: { es: 'Los datos.', en: 'The data.' },
    solucion: { es: 'Cómo lo resolví.', en: 'How I solved it.' },
  },

  web: {
    intro: {
      es: 'Antes de dedicarme a los datos trabajé como desarrollador full stack. Estos proyectos son la razón por la que puedo llevar un modelo desde el notebook hasta un sitio funcionando.',
      en: 'Before moving into data I worked as a full stack developer. These projects are why I can take a model from the notebook to a working site.',
    },
  },

  formacion: {
    detalle: {
      es: ' — Ejercicios y trabajos de cursada.',
      en: ' — Exercises and coursework.',
    },
  },

  sobreMi: {
    foto: {
      es: 'Foto de Gabriel Domingo',
      en: 'Photo of Gabriel Domingo',
    },
    p1: {
      antes: {
        es: 'Estoy terminando mi formación de Desarrollo de Software en UADE, con el foco puesto en ciencia de datos. Vengo del desarrollo full stack freelance, y ',
        en: "I'm finishing my Software Development degree at UADE, focused on data science. I come from freelance full stack development, and ",
      },
      fuerte: {
        es: 'esa mezcla es la que me interesa aprovechar',
        en: 'that mix is what I want to put to work',
      },
      despues: {
        es: ': sé procesar un dataset de millones de filas y también construir la arquitectura para que ese resultado impacte en el usuario final.',
        en: ': I know how to process a dataset of millions of rows, and also how to build the architecture that gets the result to the end user.',
      },
    },
    p2: {
      antes: {
        es: 'Mi experiencia previa gestionando integralmente un complejo de 24 departamentos me enseñó a liderar equipos y mediar entre distintas áreas. Al analizar métricas de ocupación, comprendí que ',
        en: 'Running a 24-apartment complex end to end taught me to lead a team and mediate between areas. Working with occupancy metrics is where I understood that ',
      },
      fuerte: {
        es: 'los datos deben impulsar decisiones, no solo ser un registro',
        en: 'data should drive decisions, not just record them',
      },
      despues: {
        es: '. Esta etapa forjó mi perfil resolutivo, mi capacidad de adaptación y mi habilidad para comunicar información técnica de forma clara a cualquier público.',
        en: '. That stage shaped how I solve problems, how I adapt, and how I explain technical information clearly to any audience.',
      },
    },
    p3: {
      antes: {
        es: 'Actualmente busco sumarme a un equipo de datos. Me interesan ',
        en: "I'm looking to join a data team. I'm drawn to ",
      },
      fuerte: {
        es: 'los desafíos donde la información tiene consecuencias concretas',
        en: 'problems where the information has concrete consequences',
      },
      despues: {
        es: ' —optimizar operaciones o asignar mejor un recurso— y los entornos dinámicos donde se debata el porqué de cada decisión técnica.',
        en: ' —optimizing an operation, allocating a resource better— and to teams where the reasoning behind each technical decision gets discussed.',
      },
    },
  },

  contacto: {
    intro: {
      es: '¿Tenés un desafío por delante? Ya sea para una oportunidad laboral o para explorar cómo sumar valor a tu idea, hablemos.',
      en: "Have a challenge ahead? Whether it's a role you're hiring for or an idea you want to add value to, let's talk.",
    },
    ubicacion: {
      es: 'Buenos Aires, Argentina',
      en: 'Buenos Aires, Argentina',
    },
  },
};

// Tolera strings sueltos: un campo que todavía no se tradujo sigue mostrándose
// tal cual en los dos idiomas, sin romper nada.
export function t(campo, idioma) {
  if (campo == null) return '';
  if (typeof campo === 'string') return campo;
  return campo[idioma] ?? campo.es;
}
