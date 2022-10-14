import { createContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { CoffeeProvider } from './context/CoffeeContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/Global'

export const AppContext = createContext(null)

function App() {
  return (
    <CoffeeProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </CoffeeProvider>
  )
}

export default App
