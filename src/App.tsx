import { createContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/Global'

export const AppContext = createContext(null)

function App() {
  return (
    <AppContext.Provider value={{}}>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
