import {
  ActionsContainer,
  BuyContainer,
  CartButton,
  CoffeeCardContainer,
  Counter,
} from './styles'
import { ShoppingCart } from 'phosphor-react'
import { useReducer } from 'react'

interface IProps {
  img: string
  title: string
  description: string
  type: string
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      }
    case 'DECREMENT':
      if (state.count > 0) {
        return {
          count: state.count - 1,
        }
      } else {
        return state
      }
    case 'sentToCart':
      return {
        count: 0,
      }
    default:
      return state
  }
}

export const CoffeeCard = ({ img, title, description, type }: IProps) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return (
    <CoffeeCardContainer>
      <img src={img} alt="" />
      <h2>{type}</h2>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <BuyContainer>
        <span>
          R$ <strong>9,90</strong>
        </span>
        <ActionsContainer>
          <Counter>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
            <input type="number" value={state.count} />
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
          </Counter>
          <CartButton onClick={() => dispatch({ type: 'sentToCart' })}>
            <ShoppingCart />
          </CartButton>
        </ActionsContainer>
      </BuyContainer>
    </CoffeeCardContainer>
  )
}
