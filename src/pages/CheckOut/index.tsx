import { useState } from 'react'
import { CoffeeCard } from './Components/CoffeeCard'
import { CoffeeForm } from './Components/CoffeeForm'

import { CheckOutContainer } from './styles'

export const CheckOut = () => {
  const initialState = {
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
  }

  const [state, setState] = useState(initialState)
  const [error, setError] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(state)
    window.location.assign('/success')
  }
  const handleInput = (e) => {
    const inputName = e.currentTarget.name
    const inputValue = e.currentTarget.value

    setState((prev) => ({ ...prev, [inputName]: inputValue }))
  }

  return (
    <CheckOutContainer>
      <CoffeeForm state={state} handleInput={handleInput} />
      <CoffeeCard error={error} handleSubmit={handleSubmit} />
    </CheckOutContainer>
  )
}
