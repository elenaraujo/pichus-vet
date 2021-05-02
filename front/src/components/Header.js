import React from 'react'
import { useHeader } from './styles'

const Header = () => {
  const classes = useHeader()
  return (
    <div className={classes.root}>
    </div>
  )
}

export default Header
