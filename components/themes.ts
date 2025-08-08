export type BottomBarTokens = {
  background: string;
  divider: string;
  iconActive: string;
  iconInactive: string;
  radius: number;
};

export type Theme = {
  text: string;
  textSecondary: string;
  background: string;
  bgDark: string;
  bgDarker: string;
  bgDarkest: string;
  border: string;
  accent: string;
  success: string;
  warning: string;
  error: string;
  sand100: string;
  sand200: string;
  sand300: string;
  bottomBar: BottomBarTokens;
  // Optional new tokens for cards and controls (dummy for now)
  card?: {
    outer: string;
    inner: string;
  };
  control?: {
    outline: string;
  };
  radii?: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
};

export const Themes: { dark: Theme; light: Partial<Theme> } = {
  dark: {
    text: 'rgb(166 173 186)',
    textSecondary: 'rgb(120 129 145)',
    background: '#000000',
    bgDark: 'rgb(50 62 66)',
    bgDarker: 'rgb(44 54 58)',
    bgDarkest: 'rgb(35 43 46)',
    border: '#2e2e2e',
    accent: '#ff6b6b',
    success: '#51cf66',
    warning: '#ffd43b',
    error: '#ff6b6b',
    sand100: '#F4EFE5',
    sand200: '#EDEBDF',
    sand300: '#E9DBC0',
    bottomBar: {
      background: 'rgb(35 43 46)',
      divider: 'rgb(50 62 66)',
      iconActive: '#E9DBC0',
      iconInactive: 'rgba(233,219,192,0.7)',
      radius: 16,
    },
    card: {
      outer: 'rgb(31 36 38)',
      inner: 'rgb(39 45 48)',
    },
    control: {
      outline: '#2e2e2e',
    },
    radii: {
      sm: 8,
      md: 12,
      lg: 16,
      xl: 20,
    },
  },
  light: {},
};
