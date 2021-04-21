import React from 'react'
import { Link } from 'react-router-dom'
import { useLogoButton } from './styles'
import logo from '../../assets/img/pets.png'

function LogoButton() {
  const classes = useLogoButton()

  return (
    <div className={classes.logo}>
      <Link to='/'>
        <img
          className={classes.logoImg}
          src={logo}
          alt='Silhueta de cão e gato'
        />
      </Link>
    </div>
  )
}

export default LogoButton
