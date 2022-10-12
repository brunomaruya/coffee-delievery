import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'
import {
  AdressContainer,
  InputsContainer,
  PayMethodContainer,
  PayMethodWrapper,
  PayMethod,
  CoffeeFormContainer,
} from './styels'

export const CoffeeForm = () => {
  return (
    <CoffeeFormContainer>
      <h1>Complete seu pedido</h1>
      <AdressContainer>
        <header>
          <MapPinLine />
          <div>
            <h2>Endereço de Entrega</h2>
            <h3>Informe o endereço onde deseja receber seu pedido</h3>
          </div>
        </header>
        <InputsContainer>
          <div className="input cep">
            <input type="text" placeholder="CEP" />
          </div>
          <div className="input rua">
            <input type="text" placeholder="Rua" />
          </div>
          <div className="input numero">
            <input type="text" placeholder="Número" />
          </div>
          <div className="input complemento">
            <input type="text" placeholder="Complemento" />
            <span>Opcional</span>
          </div>
          <div className="input bairro">
            <input type="text" placeholder="Bairro" />
          </div>
          <div className="input cidade">
            {' '}
            <input type="text" placeholder="Cidade" />
          </div>
          <div className="input uf">
            <input type="text" placeholder="UF" />
          </div>
        </InputsContainer>
      </AdressContainer>
      <PayMethodContainer>
        <header>
          <CurrencyDollar />
          <div>
            <h2>Pagamento</h2>
            <h3>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar.
            </h3>
          </div>
        </header>
        <PayMethodWrapper>
          <PayMethod>
            <CreditCard />
            <span>cartao de credito</span>
          </PayMethod>
          <PayMethod>
            <Bank /> <span>cartao de debito</span>
          </PayMethod>
          <PayMethod>
            <Money /> <span>dinheiro</span>
          </PayMethod>
        </PayMethodWrapper>
      </PayMethodContainer>
    </CoffeeFormContainer>
  )
}
