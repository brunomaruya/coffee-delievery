import { Trash } from 'phosphor-react'
import {
  CoffeeCardContainer,
  CoffeeCardWrapper,
  CoffeesSelectedContainer,
  BillContainer,
  ConfirmButton,
} from './styles'

import coffees from '../../../../data/coffeeItems.json'
import { CoffeeSelected } from '../../../../components/Common/CoffeeSelected'

export const CoffeeCard = () => {
  return (
    <CoffeeCardContainer>
      <h1>Cafés selecionados</h1>
      <CoffeeCardWrapper>
        <CoffeesSelectedContainer>
          <CoffeeSelected img={coffees[1].img} title={coffees[1].title} />
          <CoffeeSelected img={coffees[2].img} title={coffees[2].title} />
          <CoffeeSelected img={coffees[3].img} title={coffees[3].title} />
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
