import styled, { css } from 'styled-components'

const Box = css`
  padding: 2.5rem;
  background: var(--base-card);
`

export const CoffeeFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  margin-bottom: 15rem;
`
export const AdressContainer = styled.div`
  ${Box};
  border-radius: 10px;
  header {
    margin-bottom: 2rem;
  }
  svg {
    color: var(--yellow-dark);
  }
`
export const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: 7fr 9fr 5rem;
  grid-template-rows: auto;
  grid-template-areas:
    'cep . . '
    'rua rua rua'
    'numero complemento complemento'
    'bairro cidade uf';
  gap: 1rem;

  .input {
    background: var(--base-input);
    color: var(--base-label);
    font-size: 0.875rem;
    border: 1px solid var(--base-button);
    border-radius: 10px;
    &.cep {
      grid-area: cep;
    }
    &.rua {
      grid-area: rua;
    }
    &.numero {
      grid-area: numero;
    }
    &.complemento {
      grid-area: complemento;
      display: flex;
      justify-content: space-between;
    }
    &.bairro {
      grid-area: bairro;
    }
    &.cidade {
      grid-area: cidade;
    }
    &.uf {
      grid-area: uf;
    }
    span {
      font-style: italic;
    }
    &:active {
      border: 1px solid var(--yellow-dark);
    }
  }
`

export const PayMethodContainer = styled.div`
  ${Box}

  border-radius: 10px;
  header {
    margin-bottom: 2rem;
  }
  svg {
    color: var(--purple);
  }
`

export const PayMethodWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`
export const PayMethod = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: var(--base-button);
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: var(--base-hover);
  }
`
export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0.75rem;
  background: transparent;
  border: none;
  outline: none;
`
