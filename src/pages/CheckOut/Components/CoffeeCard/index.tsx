import { Trash } from 'phosphor-react'
import {
  CoffeeCardContainer,
  CoffeeCardWrapper,
  CoffeesSelectedContainer,
  BillContainer,
  ConfirmButton,
} from './styles'

import { CoffeeSelected } from '../../../../components/Common/CoffeeSelected'
import { useCoffee } from '../../../../context/CoffeeContext'
import { formatCurrency } from '../../../../utilities/formatCurrency'
import coffeeItems from '../../../../data/coffeeItems.json'

export const CoffeeCard = () => {
  const { coffees } = useCoffee()
  const totalDeItens = coffees.reduce((total, coffee) => {
    const coffeeInCart = coffeeItems.find((c) => c.id === coffee.id)
    return total + (coffeeInCart?.price || 0) * coffee.quantity
  }, 0)

  const entrega = 3.5
  const total = totalDeItens + entrega
  return (
    <CoffeeCardContainer>
      <h1>Cafés selecionados</h1>
      <CoffeeCardWrapper>
        <CoffeesSelectedContainer>
          {coffees.map((coffee) => {
            return <CoffeeSelected key={coffee.id} {...coffee} />
          })}
        </CoffeesSelectedContainer>

        <BillContainer>
          <div>
            <span>Total de itens</span>
            <span>{`R$ ${formatCurrency(totalDeItens)}`}</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>{`R$ ${formatCurrency(entrega)}`}</span>
          </div>
          <div>
            <span>Total</span>
            <span>{`R$ ${formatCurrency(total)}`}</span>
          </div>
        </BillContainer>
        <ConfirmButton href="/Success">Confirmar Pedido</ConfirmButton>
      </CoffeeCardWrapper>
    </CoffeeCardContainer>
  )
}
