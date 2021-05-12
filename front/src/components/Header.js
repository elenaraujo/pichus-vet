import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { IconButton, Button } from '@material-ui/core'
import { StylesProvider } from '@material-ui/core/styles'
import { useHeader } from './styles'
import LogoButton from './LogoButton'

const Header = () => {
  const classes = useHeader()
  return (
    <StylesProvider injectFirst >
      <div className={classes.root}>
        <div className={classes.menuDiv}>
          <IconButton aria-label='menu'>
              <MenuIcon className={classes.menuIcon} />
          </IconButton>
        </div>
        <div className={classes.signInSignOutButtons} style={{ alignSelf: 'center', margin: 10 }}>
          <Button
            variant="contained"
            color='primary'
            style={{ marginRight: 10 }}
            className={classes.login}
          >
            Entrar
          </Button>
          <Button
            variant="outlined"
            color='secondary'
            className={classes.register}
          >
            Registrar
          </Button>
        </div>
      </div>
      <LogoButton />
    </StylesProvider>
  )
}

export default Header