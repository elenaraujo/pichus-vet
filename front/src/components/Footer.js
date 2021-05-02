import React from 'react'
import { useFooter } from './styles'
import logo from '../assets/img/p-logo.png'

const Footer = () => {
  const classes = useFooter()
  return (
    <footer id="footer" className={classes.root}>
      <div className={classes.div}>
        <img
          className={classes.img}
          src={logo}
          alt='Logo estilizada da Pichus escrito P e com uma pegada de patinha'
        />
      </div>
      <p className={classes.p}>© Copyright 2021</p>
    </footer>
  )
}

export default Footer
