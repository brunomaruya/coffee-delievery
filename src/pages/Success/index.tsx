import { OrderInfoBox, SuccessContainer, SuccessWrapper } from './styles'
import img from '../../assets/Illustration.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Item } from '../../components/Common/Item'

export const Success = () => {
  return (
    <SuccessContainer>
      <SuccessWrapper>
        <h1>Uhu! Pedido confirmado</h1>
        <h3>Agora e so aguardar que logo o cafe chegara ate voce</h3>

        <OrderInfoBox>
          <Item
            icon={<MapPin />}
            content={
              'Entrega em Rua Joao Daniel Martinelli, 102 Farrapos - Porto Alegre, Rs'
            }
            backgroundColor={'--purple'}
          />
          <Item
            icon={<Timer />}
            content={'Previsao de etrega'}
            description={'20 min - 30 min'}
            backgroundColor={'--yellow'}
          />
          <Item
            icon={<CurrencyDollar />}
            content={'Pagamento na entrega'}
            description={'Cartao de credito'}
            backgroundColor={'--yellow-dark'}
          />
        </OrderInfoBox>
      </SuccessWrapper>
      <img src={img} alt="" />
    </SuccessContainer>
  )
}
