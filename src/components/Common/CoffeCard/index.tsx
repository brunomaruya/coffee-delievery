import {
  ActionsContainer,
  BuyContainer,
  CartButton,
  CoffeeCardContainer,
} from './styles'
import { ShoppingCart } from 'phosphor-react'
import { Counter } from '../Counter'
import { useCoffee } from '../../../context/CoffeeContext'
import { formatCurrency } from '../../../utilities/formatCurrency'

interface IProps {
  id: number
  img: string
  title: string
  description: string
  type: string
}

export const CoffeeCard = ({
  id,
  img,
  title,
  description,
  type,
  price,
}: IProps) => {
  return (
    <CoffeeCardContainer>
      <img src={img} alt="" />
      <h2>{type}</h2>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <BuyContainer>
        <span>
          R$ <strong>{formatCurrency(price)}</strong>
        </span>
        <ActionsContainer>
          <Counter id={id} />
          <CartButton href="/CheckOut">
            <ShoppingCart />
          </CartButton>
        </ActionsContainer>
      </BuyContainer>
    </CoffeeCardContainer>
  )
}
