import { useReducer, useState } from 'react'
import { CounterContainer } from './styles'

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      if (state.count < 100) {
        return {
          count: state.count + 1,
        }
      } else {
        return state
      }

    case 'DECREMENT':
      if (state.count > 0) {
        return {
          count: state.count - 1,
        }
      } else {
        return state
      }
    default:
      return state
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return (
    <CounterContainer>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <input max="3" type="number" value={state.count} />
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
    </CounterContainer>
  )
}
