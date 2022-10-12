import { CoffeeCard } from '../../../../components/Common/CoffeCard'
import { CoffeeListContainer } from './styles'
import coffeeItems from '../../../../data/coffeeItems.json'

export const CoffeeList = () => {
  return (
    <CoffeeListContainer>
      <h1>Nossos</h1>
      <ul>
        {coffeeItems.map((coffee) => {
          return (
            <CoffeeCard
              key={coffee.id}
              img={coffee.img}
              title={coffee.title}
              description={coffee.description}
              type={coffee.type}
            />
          )
        })}
      </ul>
    </CoffeeListContainer>
  )
}
