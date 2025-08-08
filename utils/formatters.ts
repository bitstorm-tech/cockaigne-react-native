// Formatting helpers for currency, dates, and distances
// Strict TypeScript, no React Native imports required

export const formatCurrency = (value: number, locale: string = 'de-DE', currency: string = 'EUR'): string => {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
};

export const formatDateShort = (iso?: string): string => {
  if (!iso) return 'Heute';
  const d = new Date(iso);
  const today = new Date();
  // normalize to date-only comparison
  const same = d.toDateString() === today.toDateString();
  if (same) return 'Heute';
  return d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
};

export const formatDistance = (meters?: number): string | undefined => {
  if (meters == null || Number.isNaN(meters)) return undefined;
  if (meters < 1000) return `${Math.round(meters)} m`;
  const km = meters / 1000;
  return `${km.toFixed(1).replace('.', ',')} km`;
};
