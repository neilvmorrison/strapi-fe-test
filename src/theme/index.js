import { indigo, amber } from './colors';

const defaultTheme = {
  palette: {
    primary: {
      light: indigo[300],
      medium: indigo[500],
      dark: indigo[700],
    },
    secondary: {
      light: amber[300],
      medium: amber[500],
      dark: amber[700],
    },
  },
  shape: {
    radius: 6,
  },
  spacing: {},
  breakpoints: {},
  typography: {},
};

export const makeTheme = (options) => ({
  ...defaultTheme,
  ...options,
});

export default defaultTheme;
