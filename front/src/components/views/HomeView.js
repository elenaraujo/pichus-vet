import React from 'react'
import { useHomeView } from './styles'

function HomeView() {
  const classes = useHomeView()
  return (
    <div>
      <div className={classes.body}></div>
    </div>
  )
}

export default HomeView
