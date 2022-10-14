import { useCoffee } from '../../../context/CoffeeContext'
import { CounterContainer } from './styles'

type couterProps = {
  id: number
}
export const Counter = ({ id }: couterProps) => {
  const { getCoffeeQuantity, increaseCoffeeQuantity, decreaseCoffeeQuantity } =
    useCoffee()
  const quantity = getCoffeeQuantity(id)
  return (
    <CounterContainer>
      <button onClick={() => decreaseCoffeeQuantity(id)}>-</button>
      <input type="number" value={quantity} />
      <button onClick={() => increaseCoffeeQuantity(id)}>+</button>
    </CounterContainer>
  )
}
