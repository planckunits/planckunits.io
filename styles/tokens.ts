// Design Tokens for PlanckUnits.io
// All design decisions centralized here

export const colors = {
  // Primary palette (blue theme)
  primary: {
    900: '#116D93', // Dark blue
    800: '#2D4851', // Dark gray-blue
    700: '#4A7890', // Medium-dark blue
    600: '#6698B3', // Medium blue
    500: '#91C2D6', // Main blue
    400: '#9FCDDC', // Light blue
    300: '#7DBFD9', // Light blue accent
    200: '#B8DCE8', // Very light blue
    100: '#D9EDF4', // Pale blue
  },

  // Accent colors (complementary blues)
  accent: {
    teal: '#4A9B7F',
    tealLight: '#5CB896',
    coral: '#E8A87C',
    glow: '#7DBFD9', // Light blue glow
  },

  // Neutral palette
  neutral: {
    900: '#1A1A1A',
    700: '#4A4A4A',
    500: '#7A7A7A',
    300: '#D1D1D1',
    100: '#F5F5F5',
    50: '#FAFAFA',
    white: '#FFFFFF',
  },

  // Category colors
  category: {
    iot: '#2196F3',
    web: '#9C27B0',
    consulting: '#FF9800',
  },
} as const

export const typography = {
  fontFamily: {
    primary: "'Inter', 'Exo 2', system-ui, -apple-system, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },

  fontSize: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
    '6xl': '3.75rem', // 60px
  },

  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const

export const spacing = {
  0: '0',
  1: '0.25rem', // 4px
  2: '0.5rem', // 8px
  3: '0.75rem', // 12px
  4: '1rem', // 16px
  5: '1.25rem', // 20px
  6: '1.5rem', // 24px
  8: '2rem', // 32px
  10: '2.5rem', // 40px
  12: '3rem', // 48px
  16: '4rem', // 64px
  20: '5rem', // 80px
  24: '6rem', // 96px
  32: '8rem', // 128px
} as const

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const

export const borderRadius = {
  none: '0',
  sm: '0.25rem',
  md: '0.5rem',
  lg: '1rem',
  xl: '1.5rem',
  full: '9999px',
} as const

export const shadows = {
  sm: '0 1px 2px rgba(0,0,0,0.05)',
  md: '0 4px 6px rgba(0,0,0,0.1)',
  lg: '0 10px 15px rgba(0,0,0,0.1)',
  xl: '0 20px 25px rgba(0,0,0,0.15)',
  glow: '0 0 20px rgba(0,212,170,0.3)',
  glowStrong: '0 0 40px rgba(0,212,170,0.5)',
} as const

export const transitions = {
  fast: '150ms ease',
  normal: '300ms ease',
  slow: '500ms ease',
} as const

// Export all tokens
const tokens = {
  colors,
  typography,
  spacing,
  breakpoints,
  borderRadius,
  shadows,
  transitions,
}

export default tokens
