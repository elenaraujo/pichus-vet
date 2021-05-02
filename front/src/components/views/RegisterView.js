import { React, useState } from 'react'
import LogoButton from '../LogoButton'
import { useRegisterView } from './styles'
import FaceIcon from '@material-ui/icons/Face'
import TextField from '@material-ui/core/TextField'
import { Divider } from '@material-ui/core'
import { mask } from 'remask'

function RegisterView() {
  const classes = useRegisterView()
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [nasc, setNasc] = useState('')

  const onChange = ev => {
    setCpf(mask(ev.target.value, ['999.999.999-99']))
  }

  return (
    <div>
      <LogoButton />
      <h1 className={classes.h1}>Cadastro Pichus</h1>
      <Divider />
      <div className={classes.form}>
        <h2 className={classes.h2}>Vamos começar pelos seus dados, humano</h2>
        <div className={classes.iconName}>
          <FaceIcon className={classes.icon} />
          <TextField
            id='nomeHumano'
            label='Nome completo'
            fullWidth
            size='small'
            onChange={setName}
            value={name}
          />
        </div>
        <div className={classes.otherFields}>
          <TextField
            id='cpf'
            label='CPF'
            size='small'
            margin='normal'
            maxLenght='14'
            onChange={onChange}
            value={cpf}
          />
          <TextField
            id='nascHumano'
            label='Data de nascimento'
            size='small'
            margin='normal'
            onChange={setNasc}
            value={nasc}
          />
        </div>
        <div>
          <TextField id='tel' label='Telefone' size='small' margin='normal' />
        </div>
      </div>
    </div>
  )
}

export default RegisterView
