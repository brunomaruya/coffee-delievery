import styled, { css } from 'styled-components'

const Box = css`
  padding: 2.5rem;
  background: var(--base-card);
`

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  color: var(--base-text);
`

export const CoffeeCardWrapper = styled.div`
  ${Box}
  border-radius: 10px 50px;
`
export const CoffeesSelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const CoffeeSelected = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: 1.5rem;
  border-bottom: 1px solid var(--base-button);
`
export const CoffeeInfo = styled.div`
  display: flex;
  gap: 1.25rem;
  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    h1 {
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      font-weight: 400;
      line-height: 20px;
    }
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Counter = styled.div`
  width: 4.25rem;
  height: 2.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: var(--base-button);
  border-radius: 10px;
  button {
    min-width: 0.875rem;
    color: var(--purple);
    background: transparent;
    font-size: 1.3rem;
    border: none;
    outline: none;
    transition: 0.3s all ease;
  }
  button:hover {
    color: var(--purple-dark);
  }
  input {
    width: 1rem;
    background: transparent;
    text-align: center;
    font-size: 1rem;
    border: none;
    outline: none;
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`

export const RemoveButton = styled.button`
  height: 2.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: var(--base-button);
  border-radius: 10px;
  border: none;
  outline: none;
  transition: all 0.3s ease;
  svg {
    color: var(--purple);
  }
  &:hover {
    background: var(--base-hover);
  }
`

export const BillContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-block: 1.5rem;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
  }
  div:last-child {
    font-size: 1.25rem;
    font-weight: 800;
  }
`
export const ConfirmButton = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  background: var(--yellow);
  color: var(--white);
  text-decoration: none;
  font-size: 0.875rem;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--yellow-dark);
  }
`
