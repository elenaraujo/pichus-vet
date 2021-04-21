import React from 'react'
import Button from '@material-ui/core/Button'
import { useNewButton } from './styles'

function NewButton(props) {
  const classes = useNewButton()

  return (
    <Button className={classes.button} variant='contained'>
      {props.text}
    </Button>
  )
}

export default NewButton
