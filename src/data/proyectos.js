// Las tecnologías se nombran, no se pintan: el color sale de tecnologias.js.
export const destacados = [
  {
    id: 'f1',
    titulo: 'Plataforma de estrategia y telemetría de Fórmula 1',
    imagen: null,
    placeholder: 'Captura del dashboard de telemetría F1',
    altoMin: 320,
    problema:
      'Decidir en qué vuelta parar a cambiar neumáticos es la decisión de mayor impacto de una carrera, y depende de estimar cuánto se está degradando el compuesto en tiempo real.',
    datos:
      'Tres temporadas completas de Fórmula 1 (2024, 2025 y lo corrido de 2026): 72 carreras, más de 37 millones de filas de telemetría oficial obtenidas con FastF1 — velocidad, RPM, freno, acelerador, marcha, compuesto y coordenadas de pista, muestreadas varias veces por segundo.',
    solucion:
      'Ingesta automatizada con GitHub Actions hacia un data lake en AWS S3, organizado en capas bronze / silver / gold con particionado tipo Hive. Procesamiento distribuido con PySpark, capa analítica en BigQuery y un modelo XGBoost entrenado sobre 58.529 vueltas, corrigiendo el efecto del combustible que se quema y descartando las vueltas con lluvia.',
    resultado: {
      titular: 'MAE 0,678 s · 16,7% mejor que el baseline',
      detalle:
        'Error medio de 0,678 segundos al predecir la caída de ritmo, validando sobre un circuito que el modelo nunca había visto. El hallazgo interesante es que la ventana óptima que calcula el modelo cae unas diez vueltas más tarde que la parada real: en 2024 la mayoría de las paradas las decidió un safety car, no la degradación.',
    },
    tags: [
      'Python',
      'FastF1',
      'PySpark',
      'AWS S3',
      'BigQuery',
      'XGBoost',
      'Looker Studio',
      'Next.js',
      'TypeScript',
      'Recharts',
      'Three.js',
    ],
    enlaces: [
      {
        texto: 'Ver dashboard',
        href: 'https://f1-data-two.vercel.app/',
        principal: true,
      },
      {
        texto: 'Ver BI en Looker Studio',
        href: 'https://datastudio.google.com/reporting/08593df1-5291-419c-847a-ce256097384e',
      },
      { texto: 'Código', href: 'https://github.com/gabydomingo/f1-data' },
    ],
  },
  {
    id: 'oceano',
    titulo: 'Detección de anomalías oceánicas en la costa de Mar del Plata',
    imagen: null,
    placeholder: 'Captura del detector de anomalías oceánicas',
    altoMin: 320,
    problema:
      'Las olas de calor marinas afectan directamente a la pesca y al turismo de la costa bonaerense, pero no existe una herramienta accesible que las detecte y las muestre.',
    datos:
      '22 años de temperatura superficial del mar de NOAA (2003–2024), más salinidad y altura de ola de Copernicus Marine: 6,29 millones de puntos de grilla sobre la plataforma frente a Mar del Plata.',
    solucion:
      'ETL con xarray sobre archivos NetCDF hacia PostgreSQL corriendo en Docker, con ingeniería de variables estacionales para que el modelo entienda que 20°C en febrero es normal y en agosto no. Detección de anomalías con Isolation Forest y pronóstico de tendencia con SARIMA. Después lo expuse como API con FastAPI y una interfaz en Next.js.',
    resultado: {
      titular: '33,7% anómalo contra 5% de base',
      detalle:
        'Durante la ola de calor marina récord de febrero–marzo de 2017 —documentada en la literatura científica— el modelo marcó como anómalo el 33,7% de los datos. La detección se mantuvo estable variando el umbral de contaminación entre 3% y 7%.',
    },
    tags: [
      'Python',
      'xarray',
      'PostgreSQL',
      'Docker',
      'scikit-learn',
      'statsmodels',
      'Power BI',
      'FastAPI',
      'Next.js',
      'Render',
    ],
    enlaces: [
      {
        texto: 'Probar el detector',
        href: 'https://anomalias-oceanicas-phi.vercel.app/',
        principal: true,
      },
      {
        texto: 'Código',
        href: 'https://github.com/gabydomingo/anomalias-oceanicas',
      },
    ],
  },
  {
    id: 'ausa',
    titulo: 'Análisis de siniestros viales en autopistas de AUSA',
    imagen: '/proyectos/ausa.png',
    placeholder: 'Captura del tablero de siniestros AUSA',
    altoMin: 300,
    problema:
      'Anticipar qué siniestros van a ser graves permite dimensionar mejor la respuesta de emergencia.',
    datos:
      'Registros históricos de incidentes de tránsito en las autopistas urbanas de la Ciudad de Buenos Aires.',
    solucion:
      'Limpieza y transformación con pandas, análisis exploratorio, modelo de clasificación con Random Forest y un tablero de seguimiento en Looker Studio.',
    resultado: {
      titular: '78% de recall en siniestros graves',
      detalle:
        'Se priorizó no dejar pasar casos críticos por encima de la precisión general.',
    },
    tags: [
      'Python',
      'pandas',
      'scikit-learn',
      'Random Forest',
      'Looker Studio',
    ],
    enlaces: [
      { texto: 'Ver notebook', href: '#' },
      { texto: 'Ver dashboard', href: '#' },
    ],
  },
];

export const web = [
  {
    id: 'recalde',
    nombre: 'Recalde Inmobiliaria',
    descripcion:
      'Sitio para una inmobiliaria de la costa atlántica, en producción.',
    imagen: '/proyectos/recalde.png',
    placeholder: 'Captura Recalde Inmobiliaria',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Vercel'],
    enlaces: [
      {
        texto: 'Ver sitio',
        href: 'https://recaldeinmobiliaria.com/',
        principal: true,
      },
    ],
  },
  {
    id: 'minini',
    nombre: 'Minini Propiedades',
    descripcion:
      'Migración completa de un sitio en WordPress a un desarrollo propio, con buscador avanzado, mapas interactivos y panel de administración.',
    imagen: '/proyectos/minprop.png',
    placeholder: 'Captura Minini Propiedades',
    tags: ['Next.js', 'TypeScript', 'Supabase'],
    enlaces: [
      {
        texto: 'Ver sitio',
        href: 'https://propiedadesminini.com/',
        principal: true,
      },
    ],
  },
  {
    id: 'giacchino',
    nombre: 'Giacchino Propiedades',
    descripcion: 'Desarrollo web integral para una agencia independiente.',
    imagen: '/proyectos/giachiprop.png',
    placeholder: 'Captura Giacchino Propiedades',
    tags: ['Next.js', 'TypeScript', 'Supabase'],
    enlaces: [
      {
        texto: 'Ver sitio',
        href: 'https://www.giacchinopropiedades.com/',
        principal: true,
      },
    ],
  },
  {
    id: 'ecommerce',
    nombre: 'Ecommerce de hardware',
    descripcion:
      'Tienda con comparador de componentes, mapa de stock por sucursal y visor 3D. Modelo didáctico.',
    imagen: '/proyectos/pczone-web-cap.png',
    placeholder: 'Captura ecommerce de hardware',
    tags: ['Next.js', 'Prisma', 'Supabase'],
    // Sin sitio en producción: el único enlace es el código
    enlaces: [
      { texto: 'Código', href: 'https://github.com/pcZone-org/pczone-web' },
    ],
  },
];

export const formacion = [
  {
    id: 'constelaciones',
    nombre: 'Constelaciones de recuerdo',
    descripcion:
      'App Android que visualiza constelaciones e historias usando la API de la NASA, con chat integrado.',
    tags: ['Kotlin', 'Android Studio'],
    enlaces: [
      {
        texto: 'Código',
        href: 'https://github.com/gabydomingo/constelaciones_de_recuerdo',
      },
    ],
  },
  {
    id: 'amigo-secreto',
    nombre: 'Challenge amigo secreto',
    descripcion: 'Sorteo de amigo invisible en JavaScript puro.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    enlaces: [
      {
        texto: 'Ver demo',
        href: 'https://gabydomingo.github.io/ChallengeAmigoSecreto/',
        principal: true,
      },
      {
        texto: 'Código',
        href: 'https://github.com/gabydomingo/ChallengeAmigoSecreto',
      },
    ],
  },
  {
    id: 'kumo',
    nombre: 'Kumo Ramen',
    descripcion:
      'Sitio de restaurante con carga de productos, pedidos y ranking de usuarios.',
    tags: ['PHP', 'MySQL', 'jQuery'],
    enlaces: [
      { texto: 'Código', href: 'https://github.com/gabydomingo/kumoRamen' },
    ],
  },
];
