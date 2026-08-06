// Única fuente de los colores de marca. Todo lo demás referencia por nombre.
export const tecnologias = {
  Python: '#3776AB',
  pandas: '#8B7CC8',
  NumPy: '#4DABCF',
  'scikit-learn': '#F7931E',
  XGBoost: '#189FDD',
  'Random Forest': '#2E7D32',
  'Isolation Forest': '#7CB342',
  SARIMA: '#3F51B5',
  statsmodels: '#3F51B5',

  SQL: '#E38C00',
  PostgreSQL: '#336791',
  PySpark: '#E25A1C',
  'AWS S3': '#569A31',
  BigQuery: '#4285F4',
  Docker: '#2496ED',
  'GitHub Actions': '#2088FF',
  Parquet: '#50ABF1',
  xarray: '#E28931',
  FastF1: '#E10600',

  'Power BI': '#F2C811',
  'Looker Studio': '#669DF6',
  Excel: '#217346',
  Recharts: '#22B5BF',
  GeoPandas: '#139C5A',
  Folium: '#77B829',

  'Next.js': '#737373',
  React: '#61DAFB',
  TypeScript: '#3178C6',
  Tailwind: '#38BDF8',
  FastAPI: '#009688',
  Supabase: '#3ECF8E',
  Vercel: '#737373',
  Render: '#46E3B7',
  Git: '#F05032',
  Prisma: '#5A67D8',
  'Three.js': '#049EF4',

  Kotlin: '#7F52FF',
  'Android Studio': '#3DDC84',
  HTML: '#E34F26',
  CSS: '#1572B6',
  JavaScript: '#D9B411',
  PHP: '#777BB4',
  MySQL: '#4479A1',
  jQuery: '#0769AD',
};

export function colorDe(nombre) {
  return tecnologias[nombre] ?? 'var(--sec)';
}
