import { Trash } from 'phosphor-react'
import {
  CoffeeCardContainer,
  CoffeeCardWrapper,
  CoffeesSelectedContainer,
  CoffeeSelected,
  CoffeeInfo,
  ActionsContainer,
  Counter,
  RemoveButton,
  BillContainer,
  ConfirmButton,
} from './styles'

import coffee1 from '../../../../assets/Coffee Delivery/1.png'
import coffee2 from '../../../../assets/Coffee Delivery/2.png'
import coffee3 from '../../../../assets/Coffee Delivery/3.png'
import coffee4 from '../../../../assets/Coffee Delivery/4.png'
import coffee5 from '../../../../assets/Coffee Delivery/5.png'
import coffee6 from '../../../../assets/Coffee Delivery/6.png'
import coffee7 from '../../../../assets/Coffee Delivery/7.png'
import coffee8 from '../../../../assets/Coffee Delivery/8.png'
import coffee9 from '../../../../assets/Coffee Delivery/9.png'
import coffee10 from '../../../../assets/Coffee Delivery/10.png'
import coffee11 from '../../../../assets/Coffee Delivery/11.png'
import coffee12 from '../../../../assets/Coffee Delivery/12.png'
import coffee13 from '../../../../assets/Coffee Delivery/13.png'
import coffee14 from '../../../../assets/Coffee Delivery/14.png'

const coffees = [
  {
    id: 1,
    img: coffee1,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    type: 'tradicional',
  },
  {
    id: 2,
    img: coffee2,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    type: 'tradicional',
  },
  {
    id: 3,
    img: coffee3,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    type: 'tradicional',
  },
  {
    id: 4,
    img: coffee4,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    type: 'tradicional',
  },
  {
    id: 5,
    img: coffee5,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    type: 'tradicional',
  },
  {
    id: 6,
    img: coffee6,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    type: 'tradicional',
  },
  {
    id: 7,
    img: coffee7,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    type: 'tradicional',
  },
  {
    id: 8,
    img: coffee8,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    type: 'tradicional',
  },
  {
    id: 9,
    img: coffee9,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    type: 'tradicional',
  },
  {
    id: 10,
    img: coffee10,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    type: 'tradicional',
  },
  {
    id: 11,
    img: coffee11,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    type: 'tradicional',
  },
  {
    id: 12,
    img: coffee12,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    type: 'tradicional',
  },
  {
    id: 13,
    img: coffee13,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    type: 'tradicional',
  },
  {
    id: 14,
    img: coffee14,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    type: 'tradicional',
  },
]

export const CoffeeCard = () => {
  return (
    <CoffeeCardContainer>
      <h1>Cafés selecionados</h1>
      <CoffeeCardWrapper>
        <CoffeesSelectedContainer>
          <CoffeeSelected>
            <CoffeeInfo>
              <img src={coffees[1].img} alt="" />
              <div className="details">
                <h1>{coffees[1].title}</h1>
                <ActionsContainer>
                  <Counter>
                    <button>-</button>
                    <input type="number" value="0" />
                    <button>+</button>
                  </Counter>
                  <RemoveButton>
                    <Trash /> Remover
                  </RemoveButton>
                </ActionsContainer>
              </div>
            </CoffeeInfo>
            <span>R$ 9,90</span>
          </CoffeeSelected>
          <CoffeeSelected>
            <CoffeeInfo>
              <img src={coffees[2].img} alt="" />
              <div className="details">
                <h1>{coffees[2].title}</h1>
                <ActionsContainer>
                  <Counter>
                    <button>-</button>
                    <input type="number" value="0" />
                    <button>+</button>
                  </Counter>
                  <RemoveButton>
                    <Trash /> Remover
                  </RemoveButton>
                </ActionsContainer>
              </div>
            </CoffeeInfo>
            <span>R$ 9,90</span>
          </CoffeeSelected>
        </CoffeesSelectedContainer>

        <BillContainer>
          <div>
            <span>Total de itens</span>
            <span>R$ 29,70</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$3,50</span>
          </div>
          <div>
            <span>Total</span>
            <span>R$ 33,20</span>
          </div>
        </BillContainer>
        <ConfirmButton href="/Success">Confirmar Pedido</ConfirmButton>
      </CoffeeCardWrapper>
    </CoffeeCardContainer>
  )
}
