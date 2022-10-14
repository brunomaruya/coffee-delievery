import { Trash } from 'phosphor-react'
import { useCoffee } from '../../../context/CoffeeContext'
import { Counter } from '../Counter'
import {
  CoffeeSelectedWrapper,
  CoffeeInfo,
  ActionsContainer,
  RemoveButton,
} from './styles'

import coffeeItems from '../../../data/coffeeItems.json'

export const CoffeeSelected = ({ id }) => {
  const { removeCoffee } = useCoffee()
  const coffee = coffeeItems.find((c) => c.id === id)
  return (
    <CoffeeSelectedWrapper>
      <CoffeeInfo>
        <img src={coffee.img} alt="" />
        <div className="details">
          <h1>{coffee.title}</h1>
          <ActionsContainer>
            <Counter id={id} />
            <RemoveButton onClick={() => removeCoffee(id)}>
              <Trash /> Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </CoffeeInfo>
      <span>R$ 9,90</span>
    </CoffeeSelectedWrapper>
  )
}
