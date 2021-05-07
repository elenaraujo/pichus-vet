import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { IconButton, Button } from '@material-ui/core'
import { useHeader } from './styles'
import LogoButton from './LogoButton'

const Header = () => {
  const classes = useHeader()
  return (
    <>
      <div className={classes.root}>
        <div className={classes.menu}>
          <IconButton aria-label='menu'>
            <MenuIcon className={classes.teste}/>
          </IconButton>
        </div>
        <div style={{ alignSelf: 'center', margin: 10 }}>
          <Button variant="contained" style={{ marginRight: 10 }}>Entrar</Button>
          <Button variant="contained">Registrar</Button>
        </div>
      </div>
      <LogoButton />
    </>
  )
}

export default Header
