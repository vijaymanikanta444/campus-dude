import { createTheme } from '@mui/material/styles'

const palette = {
  background: '#071120',
  surface: '#101a31',
  surfaceAlt: '#16233f',
  primary: '#dbeafe',
  primaryText: '#071120',
  secondary: '#94a3b8',
  border: 'rgba(148, 163, 184, 0.2)',
  textPrimary: '#f8fafc',
  textSecondary: '#cbd5e1',
  accent: '#60a5fa',
}

export const muiTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: palette.primary,
      contrastText: palette.primaryText,
    },
    secondary: {
      main: palette.accent,
    },
    background: {
      default: palette.background,
      paper: palette.surface,
    },
    text: {
      primary: palette.textPrimary,
      secondary: palette.textSecondary,
    },
    divider: palette.border,
  },
  shape: {
    borderRadius: 20,
  },
  typography: {
    fontFamily: "Inter, 'Segoe UI', Roboto, system-ui, sans-serif",
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
})

export const styledTheme = {
  colors: palette,
  radii: {
    lg: '28px',
    md: '20px',
    sm: '14px',
  },
  spacing: {
    page: '32px',
    card: '28px',
  },
}