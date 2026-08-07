// Las tecnologías se nombran, no se pintan: el color sale de tecnologias.js.
export const destacados = [
  {
    id: 'f1',
    titulo: {
      es: 'Plataforma de estrategia y telemetría de Fórmula 1',
      en: 'Formula 1 strategy and telemetry platform',
    },
    imagen: '/proyectos/f1.png',
    placeholder: {
      es: 'Captura del dashboard de telemetría F1',
      en: 'F1 telemetry dashboard screenshot',
    },
    problema: {
      es: 'Decidir en qué vuelta parar a cambiar neumáticos es la decisión de mayor impacto de una carrera, y depende de estimar cuánto se está degradando el compuesto en tiempo real.',
      en: 'Deciding which lap to pit on is the highest-impact call of a race, and it depends on estimating how fast the tyre compound is degrading in real time.',
    },
    datos: {
      es: 'Tres temporadas completas de Fórmula 1 (2024, 2025 y lo corrido de 2026): 72 carreras, más de 37 millones de filas de telemetría oficial obtenidas con FastF1 — velocidad, RPM, freno, acelerador, marcha, compuesto y coordenadas de pista, muestreadas varias veces por segundo.',
      en: 'Three full Formula 1 seasons (2024, 2025 and 2026 so far): 72 races and over 37 million rows of official telemetry pulled with FastF1 — speed, RPM, brake, throttle, gear, compound and track coordinates, sampled several times per second.',
    },
    solucion: {
      es: 'Ingesta automatizada con GitHub Actions hacia un data lake en AWS S3, organizado en capas bronze / silver / gold con particionado tipo Hive. Procesamiento distribuido con PySpark, capa analítica en BigQuery y un modelo XGBoost entrenado sobre 58.529 vueltas, corrigiendo el efecto del combustible que se quema y descartando las vueltas con lluvia.',
      en: 'Automated ingestion with GitHub Actions into a data lake on AWS S3, organized in bronze / silver / gold layers with Hive-style partitioning. Distributed processing with PySpark, an analytics layer in BigQuery, and an XGBoost model trained on 58,529 laps, correcting for fuel burn-off and discarding wet laps.',
    },
    resultado: {
      titular: {
        es: 'MAE 0,678 s · 16,7% mejor que el baseline',
        en: 'MAE 0.678 s · 16.7% better than baseline',
      },
      detalle: {
        es: 'Error medio de 0,678 segundos al predecir la caída de ritmo, validando sobre un circuito que el modelo nunca había visto. El hallazgo interesante es que la ventana óptima que calcula el modelo cae unas diez vueltas más tarde que la parada real: en 2024 la mayoría de las paradas las decidió un safety car, no la degradación.',
        en: 'Mean error of 0.678 seconds predicting pace drop-off, validated on a circuit the model had never seen. The interesting finding is that the optimal window the model computes falls about ten laps later than the actual stop: in 2024 most pit stops were decided by a safety car, not by degradation.',
      },
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
        texto: { es: 'Ver dashboard', en: 'View dashboard' },
        href: 'https://f1-data-two.vercel.app/',
        principal: true,
      },
      {
        texto: { es: 'Ver BI en Looker Studio', en: 'View BI in Looker Studio' },
        href: 'https://datastudio.google.com/reporting/08593df1-5291-419c-847a-ce256097384e',
      },
      { texto: { es: 'Código', en: 'Code' }, href: 'https://github.com/gabydomingo/f1-data' },
    ],
  },
  {
    id: 'oceano',
    titulo: {
      es: 'Detección de anomalías oceánicas en la costa de Mar del Plata',
      en: 'Ocean anomaly detection off the coast of Mar del Plata',
    },
    imagen: '/proyectos/anomalias.png',
    placeholder: {
      es: 'Captura del detector de anomalías oceánicas',
      en: 'Ocean anomaly detector screenshot',
    },
    problema: {
      es: 'Las olas de calor marinas afectan directamente a la pesca y al turismo de la costa bonaerense, pero no existe una herramienta accesible que las detecte y las muestre.',
      en: "Marine heatwaves hit fishing and tourism on the Buenos Aires coast directly, but there's no accessible tool that detects them and shows them.",
    },
    datos: {
      es: '22 años de temperatura superficial del mar de NOAA (2003–2024), más salinidad y altura de ola de Copernicus Marine: 6,29 millones de puntos de grilla sobre la plataforma frente a Mar del Plata.',
      en: '22 years of NOAA sea surface temperature (2003–2024), plus salinity and wave height from Copernicus Marine: 6.29 million grid points over the shelf off Mar del Plata.',
    },
    solucion: {
      es: 'ETL con xarray sobre archivos NetCDF hacia PostgreSQL corriendo en Docker, con ingeniería de variables estacionales para que el modelo entienda que 20°C en febrero es normal y en agosto no. Detección de anomalías con Isolation Forest y pronóstico de tendencia con SARIMA. Después lo expuse como API con FastAPI y una interfaz en Next.js.',
      en: 'ETL with xarray over NetCDF files into PostgreSQL running in Docker, with seasonal feature engineering so the model understands that 20°C is normal in February and not in August. Anomaly detection with Isolation Forest and trend forecasting with SARIMA. Then I exposed it as an API with FastAPI and a front end in Next.js.',
    },
    resultado: {
      titular: {
        es: '33,7% anómalo contra 5% de base',
        en: '33.7% flagged anomalous vs. a 5% baseline',
      },
      detalle: {
        es: 'Durante la ola de calor marina récord de febrero–marzo de 2017 —documentada en la literatura científica— el modelo marcó como anómalo el 33,7% de los datos. La detección se mantuvo estable variando el umbral de contaminación entre 3% y 7%.',
        en: 'During the record marine heatwave of February–March 2017 —documented in the scientific literature— the model flagged 33.7% of the data as anomalous. Detection stayed stable while varying the contamination threshold between 3% and 7%.',
      },
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
        texto: { es: 'Probar el detector', en: 'Try the detector' },
        href: 'https://anomalias-oceanicas-phi.vercel.app/',
        principal: true,
      },
      {
        texto: { es: 'Código', en: 'Code' },
        href: 'https://github.com/gabydomingo/anomalias-oceanicas',
      },
    ],
  },
  {
    id: 'ausa',
    titulo: {
      es: 'Análisis de siniestros viales en autopistas de AUSA',
      en: "Road-accident analysis on AUSA's urban highways",
    },
    imagen: '/proyectos/ausa.png',
    placeholder: {
      es: 'Captura del tablero de siniestros AUSA',
      en: 'AUSA road-accident dashboard screenshot',
    },
    problema: {
      es: 'Anticipar qué siniestros van a ser graves permite dimensionar mejor la respuesta de emergencia.',
      en: 'Anticipating which accidents will be severe makes it possible to size the emergency response better.',
    },
    datos: {
      es: 'Registros históricos de incidentes de tránsito en las autopistas urbanas de la Ciudad de Buenos Aires.',
      en: 'Historical traffic incident records from the urban highways of the City of Buenos Aires.',
    },
    solucion: {
      es: 'Limpieza y transformación con pandas, análisis exploratorio, modelo de clasificación con Random Forest y un tablero de seguimiento en Looker Studio.',
      en: 'Cleaning and transformation with pandas, exploratory analysis, a Random Forest classification model and a monitoring dashboard in Looker Studio.',
    },
    resultado: {
      titular: {
        es: '78% de recall en siniestros graves',
        en: '78% recall on severe accidents',
      },
      detalle: {
        es: 'Se priorizó no dejar pasar casos críticos por encima de la precisión general: el modelo prefiere un falso positivo antes que un falso negativo.',
        en: 'Not letting critical cases slip through was prioritized over overall precision: the model would rather return a false positive than a false negative.',
      },
    },
    tags: [
      'Python',
      'pandas',
      'scikit-learn',
      'Random Forest',
      'Looker Studio',
    ],
    enlaces: [
      {
        texto: { es: 'Ver notebook', en: 'View notebook' },
        href: 'https://colab.research.google.com/drive/1Akj3H08Wwt4TvxYoQcmotAAHq2Ry4_iY?usp=sharing',
      },
      {
        texto: { es: 'Ver dashboard', en: 'View dashboard' },
        href: 'https://datastudio.google.com/reporting/a67177eb-c4c4-4320-b3bd-4169fba868a2',
      },
    ],
  },
];

export const web = [
  {
    id: 'recalde',
    nombre: 'Recalde Inmobiliaria',
    descripcion: {
      es: 'Sitio para una inmobiliaria de la costa atlántica, en producción.',
      en: 'Site for a real estate agency on the Atlantic coast, live in production.',
    },
    imagen: '/proyectos/recald.png',
    placeholder: {
      es: 'Captura Recalde Inmobiliaria',
      en: 'Recalde Inmobiliaria screenshot',
    },
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Vercel'],
    enlaces: [
      {
        texto: { es: 'Ver sitio', en: 'Visit site' },
        href: 'https://recaldeinmobiliaria.com/',
        principal: true,
      },
    ],
  },
  {
    id: 'minini',
    nombre: 'Minini Propiedades',
    descripcion: {
      es: 'Migración completa de un sitio en WordPress a un desarrollo propio, con buscador avanzado, mapas interactivos y panel de administración.',
      en: 'Full migration from WordPress to a custom build, with advanced search, interactive maps and an admin panel.',
    },
    imagen: '/proyectos/minprop.png',
    placeholder: {
      es: 'Captura Minini Propiedades',
      en: 'Minini Propiedades screenshot',
    },
    tags: ['Next.js', 'TypeScript', 'Supabase'],
    enlaces: [
      {
        texto: { es: 'Ver sitio', en: 'Visit site' },
        href: 'https://propiedadesminini.com/',
        principal: true,
      },
    ],
  },
  {
    id: 'giacchino',
    nombre: 'Giacchino Propiedades',
    descripcion: {
      es: 'Desarrollo web integral para una agencia independiente.',
      en: 'End-to-end web development for an independent agency.',
    },
    imagen: '/proyectos/giachiprop.png',
    placeholder: {
      es: 'Captura Giacchino Propiedades',
      en: 'Giacchino Propiedades screenshot',
    },
    tags: ['Next.js', 'TypeScript', 'Supabase'],
    enlaces: [
      {
        texto: { es: 'Ver sitio', en: 'Visit site' },
        href: 'https://www.giacchinopropiedades.com/',
        principal: true,
      },
    ],
  },
  {
    id: 'ecommerce',
    nombre: { es: 'Ecommerce de hardware', en: 'Hardware ecommerce' },
    descripcion: {
      es: 'Tienda con comparador de componentes, mapa de stock por sucursal y visor 3D. Modelo didáctico.',
      en: 'Store with a component comparator, stock map by branch and a 3D viewer. Learning project.',
    },
    imagen: '/proyectos/pczone-web-cap.png',
    placeholder: {
      es: 'Captura ecommerce de hardware',
      en: 'Hardware ecommerce screenshot',
    },
    tags: ['Next.js', 'Prisma', 'Supabase'],
    // Sin sitio en producción: el único enlace es el código
    enlaces: [
      { texto: { es: 'Código', en: 'Code' }, href: 'https://github.com/pcZone-org/pczone-web' },
    ],
  },
];

export const formacion = [
  {
    id: 'constelaciones',
    nombre: 'Constelaciones de recuerdo',
    descripcion: {
      es: 'App Android que visualiza constelaciones e historias usando la API de la NASA, con chat integrado.',
      en: 'Android app that visualizes constellations and their stories using NASA\'s API, with built-in chat.',
    },
    tags: ['Kotlin', 'Android Studio'],
    enlaces: [
      {
        texto: { es: 'Código', en: 'Code' },
        href: 'https://github.com/gabydomingo/constelaciones_de_recuerdo',
      },
    ],
  },
  {
    id: 'amigo-secreto',
    nombre: 'Challenge amigo secreto',
    descripcion: {
      es: 'Sorteo de amigo invisible en JavaScript puro.',
      en: 'Secret Santa draw in vanilla JavaScript.',
    },
    tags: ['HTML', 'CSS', 'JavaScript'],
    enlaces: [
      {
        texto: { es: 'Ver demo', en: 'View demo' },
        href: 'https://gabydomingo.github.io/ChallengeAmigoSecreto/',
        principal: true,
      },
      {
        texto: { es: 'Código', en: 'Code' },
        href: 'https://github.com/gabydomingo/ChallengeAmigoSecreto',
      },
    ],
  },
  {
    id: 'kumo',
    nombre: 'Kumo Ramen',
    descripcion: {
      es: 'Sitio de restaurante con carga de productos, pedidos y ranking de usuarios.',
      en: 'Restaurant site with product management, orders and a user ranking.',
    },
    tags: ['PHP', 'MySQL', 'jQuery'],
    enlaces: [
      { texto: { es: 'Código', en: 'Code' }, href: 'https://github.com/gabydomingo/kumoRamen' },
    ],
  },
];
