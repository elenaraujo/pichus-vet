import React from 'react'
import { Link } from 'react-router-dom'
import NewButton from '../NewButton'
import LogoButton from '../LogoButton'
import { useHomeView } from './styles'

function HomeView() {
  const classes = useHomeView()
  return (
    <div>
      <LogoButton />
    </div>
  )
}

export default HomeView
