import { makeStyles } from '@material-ui/core/styles'

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

  },
  div: {
    height: 78,
    minWidth: '100%',
    borderTop: 'solid 2px #eef1f5',
    borderBottom: 'solid 2px #eef1f5',
  },
  p: {
    color: '#9fafc1',
    margin: '15.5px 0 15.5px 35px',
  },
  img: {
    height: 65,
    margin: '6.5px 0 6.5px 50px',
  },
}))

export const useHeader = makeStyles(theme => ({
  root: {
    backgroundColor: '#73c3bc',
    height: 80,
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    paddingTop: 90,
  },
  menu: {
    alignSelf: 'center',
    margin: 10,
  },
  teste: {
    fontSize: 35,
  }
}))
