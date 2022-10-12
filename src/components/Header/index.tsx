import { HeaderContainer, InformationContainer, Local } from './styles'
import logo from '../../assets/logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

export const Header = () => {
  const cartRef = useRef(null)
  const [cartProductsCounter, setCartProductsCounter] = useState(0)
  useEffect(() => {
    const cartAfter = window.getComputedStyle(cartRef.current, '::after')
    console.log(cartAfter.content)
  }, [])

  return (
    <HeaderContainer>
      <a href="/">
        <img src={logo} alt="" />
      </a>

      <InformationContainer>
        <Local>
          <MapPin />
          <span>Porto Alegre,RS</span>
        </Local>

        <Link ref={cartRef} to="/CheckOut" aftercontent={cartProductsCounter}>
          <ShoppingCart />
        </Link>
      </InformationContainer>
    </HeaderContainer>
  )
}
