import {
  ActionsContainer,
  BuyContainer,
  CartButton,
  CoffeeCardContainer,
} from './styles'
import { ShoppingCart } from 'phosphor-react'
import { Counter } from '../Counter'

interface IProps {
  img: string
  title: string
  description: string
  type: string
}

export const CoffeeCard = ({ img, title, description, type }: IProps) => {
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
          <Counter />
          <CartButton>
            <ShoppingCart />
          </CartButton>
        </ActionsContainer>
      </BuyContainer>
    </CoffeeCardContainer>
  )
}
