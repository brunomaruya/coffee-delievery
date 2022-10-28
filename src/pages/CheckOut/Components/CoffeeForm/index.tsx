import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  SelectionForeground,
} from 'phosphor-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import {
  AdressContainer,
  InputsContainer,
  PayMethodContainer,
  PayMethodWrapper,
  PayMethod,
  CoffeeFormContainer,
  StyledInput,
} from './styels'

const cardSelect = {
  border: '1px solid var(--purple)',
  background: 'var(--purple-light)',
}

const styles = {
  inputOnFocus: { border: '1px solid var(--yellow-dark)' },
  inputOnBlur: { background: '#4b6cd5' },
}
export const CoffeeForm = ({ state, handleInput }) => {
  const [selected, setSelected] = useState(0)
  const [focus, setFocus] = useState(-1)

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
          <div
            className="input cep"
            style={{ ...(focus === 0 && styles.inputOnFocus) }}
          >
            <StyledInput
              type="text"
              placeholder="Cep"
              name="cep"
              value={state.cep}
              onChange={handleInput}
              onClick={() => setFocus(0)}
              onBlur={() => setFocus(-1)}
            />
          </div>
          <div
            className="input rua"
            style={{ ...(focus === 1 && styles.inputOnFocus) }}
          >
            <StyledInput
              type="text"
              placeholder="Rua"
              name="rua"
              value={state.rua}
              onChange={handleInput}
              onClick={() => setFocus(1)}
              onBlur={() => setFocus(-1)}
            />
          </div>
          <div
            className="input numero"
            style={{ ...(focus === 2 && styles.inputOnFocus) }}
          >
            <StyledInput
              type="text"
              placeholder="Número"
              name="numero"
              value={state.numero}
              onChange={handleInput}
              onClick={() => setFocus(2)}
              onBlur={() => setFocus(-1)}
            />
          </div>
          <div
            className="input complemento"
            style={{ ...(focus === 3 && styles.inputOnFocus) }}
          >
            <StyledInput
              type="text"
              placeholder="Complemento"
              name="complemento"
              value={state.complemento}
              onChange={handleInput}
              onClick={() => setFocus(3)}
              onBlur={() => setFocus(-1)}
            />
            <span>Opcional</span>
          </div>
          <div
            className="input bairro"
            style={{ ...(focus === 4 && styles.inputOnFocus) }}
          >
            <StyledInput
              type="text"
              placeholder="Bairro"
              name="bairro"
              value={state.bairro}
              onChange={handleInput}
              onClick={() => setFocus(4)}
              onBlur={() => setFocus(-1)}
            />
          </div>
          <div
            className="input cidade"
            style={{ ...(focus === 5 && styles.inputOnFocus) }}
          >
            <StyledInput
              type="text"
              placeholder="Cidade"
              name="cidade"
              value={state.cidade}
              onChange={handleInput}
              onClick={() => setFocus(5)}
              onBlur={() => setFocus(-1)}
            />
          </div>
          <div
            className="input uf"
            style={{ ...(focus === 6 && styles.inputOnFocus) }}
          >
            <StyledInput
              type="text"
              placeholder="UF"
              name="uf"
              value={state.uf}
              onChange={handleInput}
              onClick={() => setFocus(6)}
              onBlur={() => setFocus(-1)}
            />
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
          <PayMethod
            style={{ ...(selected === 0 && cardSelect) }}
            onClick={() => setSelected(0)}
          >
            <CreditCard />
            <span>cartao de credito</span>
          </PayMethod>
          <PayMethod
            style={{ ...(selected === 1 && cardSelect) }}
            onClick={() => setSelected(1)}
          >
            <Bank /> <span>cartao de debito</span>
          </PayMethod>
          <PayMethod
            style={{ ...(selected === 2 && cardSelect) }}
            onClick={() => setSelected(2)}
          >
            <Money /> <span>dinheiro</span>
          </PayMethod>
        </PayMethodWrapper>
      </PayMethodContainer>
    </CoffeeFormContainer>
  )
}
