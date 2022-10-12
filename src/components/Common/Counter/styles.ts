import styled from 'styled-components'

export const CounterContainer = styled.div`
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
    width: 1.5rem;
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
