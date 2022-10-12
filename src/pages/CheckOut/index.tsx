import { CoffeeCard } from './Components/CoffeeCard'
import { CoffeeForm } from './Components/CoffeeForm'

import { CheckOutContainer } from './styles'

export const CheckOut = () => {
  return (
    <CheckOutContainer>
      <CoffeeForm />
      <CoffeeCard />
    </CheckOutContainer>
  )
}
