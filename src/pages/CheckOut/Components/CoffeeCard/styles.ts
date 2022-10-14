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
