import { createContext, ReactNode, useContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

type CoffeeProviderProps = {
  children: ReactNode
}
type Coffee = {
  id: number
  quantity: number
}
type CoffeeContextType = {
  getCoffeeQuantity: (id: number) => number
  increaseCoffeeQuantity: (id: number) => void
  decreaseCoffeeQuantity: (id: number) => void
  removeCoffee: (id: number) => void
  coffeeQuantity: number
  coffees: Coffee[]
}

const CoffeeContext = createContext({} as CoffeeContextType)

export const useCoffee = () => {
  return useContext(CoffeeContext)
}

export const CoffeeProvider = ({ children }: CoffeeProviderProps) => {
  const [coffees, setCoffees] = useLocalStorage<Coffee[]>('coffee-cart', [])
  const getCoffeeQuantity = (id: number) => {
    return coffees.find((coffee) => coffee.id === id)?.quantity || 0
  }
  const increaseCoffeeQuantity = (id: number) => {
    setCoffees((currCoffees) => {
      if (currCoffees.find((coffee) => coffee.id === id) == null) {
        return [...currCoffees, { id, quantity: 1 }]
      } else {
        return currCoffees.map((coffee) => {
          if (coffee.id === id) {
            return { ...coffee, quantity: coffee.quantity + 1 }
          } else {
            return coffee
          }
        })
      }
    })
  }
  const decreaseCoffeeQuantity = (id: number) => {
    setCoffees((currCoffee) => {
      if (currCoffee.find((coffee) => coffee.id === id)?.quantity === 1) {
        return currCoffee.filter((item) => item.id !== id)
      } else {
        return currCoffee.map((coffee) => {
          if (coffee.id === id) {
            return { ...coffee, quantity: coffee.quantity - 1 }
          } else {
            return coffee
          }
        })
      }
    })
  }
  const removeCoffee = (id: number) => {
    setCoffees((currCoffee) => {
      return currCoffee.filter((coffee) => coffee.id !== id)
    })
  }
  const coffeeQuantity = coffees.reduce((quantity, coffee) => {
    return quantity + coffee.quantity
  }, 0)

  return (
    <CoffeeContext.Provider
      value={{
        getCoffeeQuantity,
        increaseCoffeeQuantity,
        decreaseCoffeeQuantity,
        removeCoffee,
        coffeeQuantity,
        coffees,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
