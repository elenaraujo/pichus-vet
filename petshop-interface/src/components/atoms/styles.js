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
  logo: {
    minWidth: 'fit-content',
    maxWidth: 50,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
  },
  logoImg: {
    maxWidth: 100,
    maxHeight: 100,
    display: 'flex',
    justifyContent: 'center',
  },
}))
