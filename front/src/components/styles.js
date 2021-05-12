import { makeStyles } from '@material-ui/core/styles'
import { HALF_BAKED, ALBESCENT_WHITE, MYSTIC, CADET_BLUE } from '../theme'

export const useNewButton = makeStyles(theme => ({
  button: {
    backgroundColor: '#545871',
    color: '#F1CFCD',
    borderRadius: 15,
    '&:hover': {
      backgroundColor: '#9497A7',
      color: 'white',
    },
  },
}))

export const useLogoButton = makeStyles(theme => ({
  logoImg: {
    maxWidth: '18.75rem',
    maxHeight: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '0.75rem',
  },
}))

export const useFooter = makeStyles(theme => ({
  root: {
    height: 127,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  div: {
    height: 78,
    minWidth: '100%',
    borderTop: `solid 2px ${MYSTIC}`,
    borderBottom: `solid 2px ${MYSTIC}`,
  },
  p: {
    color: CADET_BLUE,
    margin: '15.5px 0 15.5px 35px',
  },
  img: {
    height: 65,
    margin: '6.5px 0 6.5px 50px',
  },
}))

export const useHeader = makeStyles(theme => ({
  root: {
    backgroundColor: HALF_BAKED,
    height: 80,
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    paddingTop: 90,
  },
  menuDiv: {
    alignSelf: 'center',
    margin: 10,
  },
  menuIcon: {
    fontSize: '2.5rem',
    color: ALBESCENT_WHITE,
  },
}))
