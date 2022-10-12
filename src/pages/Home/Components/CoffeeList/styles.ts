import styled from 'styled-components'

export const CoffeeListContainer = styled.section`
  margin-top: 2rem;
  margin-bottom: 9.8rem;
  h1 {
    margin-bottom: 3rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    justify-content: space-between;
    column-gap: 5rem;
    row-gap: 5rem;
  }
`
