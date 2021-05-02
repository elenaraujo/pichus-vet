import React from 'react'
import { Link } from 'react-router-dom'
import { useLogoButton } from './styles'
import logo from '../assets/img/pichus-logo.png'

function LogoButton() {
  const classes = useLogoButton()

  return (
    <div className={classes.logo}>
      <Link to='/'>
        <img
          className={classes.logoImg}
          src={logo}
          alt='Logo estilizada da Pichus escrito Pichus e com uma pegada de patinha'
        />
      </Link>
    </div>
  )
}

export default LogoButton
