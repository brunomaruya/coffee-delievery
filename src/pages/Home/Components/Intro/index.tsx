import { ShoppingCart, Package, Clock, Coffee } from 'phosphor-react'
import { Item } from '../../../../components/Common/Item'
import { IntroContainer, Content, ItemsContainer } from './styles'
import coffeImage from '../../../../assets/Imagem.png'

export const Intro = () => {
  return (
    <IntroContainer>
      <Content>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h6>
          Com o Coffee Delivery você recebe seu café onde estiver, a <br />{' '}
          qualquer hora
        </h6>
        <ItemsContainer>
          <Item
            icon={<ShoppingCart />}
            content={'Compra simples e segura'}
            backgroundColor={'--yellow-dark'}
          />
          <Item
            icon={<Package />}
            content={'Embalagem mantem o cafe intacto'}
            backgroundColor={'--base-text'}
          />
          <Item
            icon={<Clock />}
            content={'Entrega rapida e rastreada'}
            backgroundColor={'--yellow'}
          />
          <Item
            icon={<Coffee />}
            content={'O cafe chega fresquinnho ate voce'}
            backgroundColor={'--purple'}
          />
        </ItemsContainer>
      </Content>
      <img src={coffeImage} alt="" />
    </IntroContainer>
  )
}
