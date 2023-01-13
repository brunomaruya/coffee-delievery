import { HeaderContainer, InformationContainer, Local } from './styles';
import logo from '../../../public/logo.png';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { useCoffee } from '../../context/CoffeeContext';

export const Header = () => {
  const { coffeeQuantity } = useCoffee();
  return (
    <HeaderContainer>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>

      <InformationContainer>
        <Local>
          <MapPin />
          <span>Porto Alegre,RS</span>
        </Local>

        <Link to="/CheckOut">
          <ShoppingCart />
          {coffeeQuantity === 0 ? (
            <div></div>
          ) : (
            <div className="cart-count-info">{coffeeQuantity}</div>
          )}
        </Link>
      </InformationContainer>
    </HeaderContainer>
  );
};
