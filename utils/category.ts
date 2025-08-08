// Dummy category to color mapping. Replace with design palette later.

const map: Record<string, string> = {
  Fashion: '#FF4D7A',
  'Food & Drink': '#F2C94C',
  'Garden & Outdoor': '#6FCF97',
  'Tools & Machinery': '#5AC8FA',
  default: '#F2C94C',
};

export const categoryColor = (category?: string): string => {
  if (!category) return map.default;
  return map[category] ?? map.default;
};
