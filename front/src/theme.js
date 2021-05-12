import { createMuiTheme } from '@material-ui/core/styles'

export const HALF_BAKED = '#73c3bc'
export const PUCE = '#c97f86'
export const ALBESCENT_WHITE = '#f6efd6'
export const MYSTIC = '#eef1f5'
export const CADET_BLUE = '#9fafc1'

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        fontFamily: 'Open Sans Condensed, sans-serif',
        fontWeight: 700,
      },
      outlinedSecondary: {
        border: '2px solid rgba(246, 239, 214, 0.5)',
        '&:hover': {
          border: '2px solid #f6efd6',
          backgroundColor: 'rgba(246, 239, 214, 0.04)',
        },
      },
    },
  },
  palette: {
    primary: {
      main: PUCE,
      contrastText: ALBESCENT_WHITE,
    },
    secondary: {
      main: ALBESCENT_WHITE,
    },
  }
})

export default theme