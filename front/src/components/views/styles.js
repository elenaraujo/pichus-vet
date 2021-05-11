import { makeStyles } from '@material-ui/core/styles'

export const useHomeView = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
  },
  button: {
    maxWidth: 500,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 15,
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'space-around',
  },
  h1: {
    color: '#545871',
    fontFamily: 'Kurale',
    textAlign: 'center',
  },
  body: {
    minHeight: window.innerHeight
  }
}))

export const useRegisterView = makeStyles(theme => ({
  icon: {
    display: 'block',
    fontSize: '1.8em',
    color: '#545871',
    marginRight: '0.4em',
  },
  h1: {
    color: '#545871',
    fontFamily: 'Kurale',
    textAlign: 'center',
    marginBottom: 0,
    fontSize: '2.5em',
  },
  h2: {
    color: '#545871',
    fontFamily: 'Nunito',
    fontSize: '1.2em',
  },
  form: {
    marginTop: '2em',
    marginLeft: '2em',
    width: '60%',
    maxWidth: 800,
  },
  iconName: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    minWidth: 440,
  },
  otherFields: {
    marginLeft: '2.5em',
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 400,
    minWidth: 400,
  },
}))
