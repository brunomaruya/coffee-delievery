import styled from 'styled-components'

export const CoffeeCardContainer = styled.li`
  max-width: 16rem;
  max-height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  padding: 1.25rem;
  padding-top: 7rem;
  background: var(--base-card);
  border-radius: 10px 50px;

  img {
    width: 7.5rem;
    position: absolute;
    top: -1.5rem;
  }

  h2 {
    padding: 0.25rem 0.5rem;
    color: var(--yellow-dark);
    background-color: var(--yellow-light);
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 10px;
  }
  h1 {
    margin-bottom: 0;
    text-align: center;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
  }
  h3 {
    margin-bottom: 2rem;
    color: var(--base-label);
    text-align: center;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 18.2px;
    word-wrap: break-word;
  }
`

export const BuyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--base-text);
  span {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
  strong {
    font-size: 1.5rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const CartButton = styled.a`
  width: 2.375rem;
  height: 2.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  color: var(--white);
  background: var(--purple-dark);
  font-size: 1rem;
  border: none;
  outline: none;
  border-radius: 10px;
  transition: 0.3s all ease;
  &:hover {
    background: var(--purple);
  }
`
