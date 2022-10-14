import { CoffeeCard } from '../../../../components/Common/CoffeCard'
import { CoffeeListContainer } from './styles'
import coffeeItems from '../../../../data/coffeeItems.json'

export const CoffeeList = () => {
  return (
    <CoffeeListContainer>
      <h1>Nossos</h1>
      <ul>
        {coffeeItems.map((coffee) => {
          return <CoffeeCard key={coffee.id} {...coffee} />
        })}
      </ul>
    </CoffeeListContainer>
  )
}
