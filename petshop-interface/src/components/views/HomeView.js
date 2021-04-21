import React from 'react'
import { Link } from 'react-router-dom'
import NewButton from '../atoms/NewButton'
import LogoButton from '../atoms/LogoButton'
import { useHomeView } from './styles'

function HomeView() {
  const classes = useHomeView()
  return (
    <div>
      <LogoButton />
      <h1 className={classes.h1}>Acesse a área do cliente da Pichus</h1>
      <div className={classes.button}>
        <NewButton text='Já tenho cadastro' />

        <Link className={classes.link} to='/register'>
          <NewButton text='Quero me cadastrar' />
        </Link>
      </div>
    </div>
  )
}

export default HomeView
