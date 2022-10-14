import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 1240px;
  height: 6.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  margin-bottom: 4rem;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /* padding: 2rem 10rem; */
`
const Information = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem;
  border: none;
  border-radius: 10px;
`

export const InformationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    ${Information}
    position: relative;
    background: var(--yellow-light);
    svg:last-child {
      font-size: 1.375rem;
      color: var(--yellow-dark);
    }
  }
  .cart-count-info {
    width: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1rem;
    position: absolute;
    top: -25%;
    right: -25%;
    color: var(--white);
    background: var(--yellow-dark);
    border-radius: 50%;
    font-size: 0.7rem;
  }
`

export const Local = styled.div`
  ${Information};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  background: var(--purple-light);
  color: var(--purple-dark);
  font-family: Roboto, sans-serif;
  font-size: 0.875;
  svg:first-child {
    font-size: 1.375rem;
  }
`
