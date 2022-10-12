import { Trash } from 'phosphor-react'
import { Counter } from '../Counter'
import {
  CoffeeSelectedWrapper,
  CoffeeInfo,
  ActionsContainer,
  RemoveButton,
} from './styles'

export const CoffeeSelected = ({ img, title }) => {
  return (
    <CoffeeSelectedWrapper>
      <CoffeeInfo>
        <img src={img} alt="" />
        <div className="details">
          <h1>{title}</h1>
          <ActionsContainer>
            <Counter />
            <RemoveButton>
              <Trash /> Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </CoffeeInfo>
      <span>R$ 9,90</span>
    </CoffeeSelectedWrapper>
  )
}
