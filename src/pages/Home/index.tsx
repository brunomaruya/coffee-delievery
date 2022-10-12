import { HomeContainer } from './styles'

import React from 'react'
import { Intro } from './Components/Intro'
import { CoffeeList } from './Components/CoffeeList'

export const Home = () => {
  return (
    <HomeContainer>
      <Intro />
      <CoffeeList />
    </HomeContainer>
  )
}
