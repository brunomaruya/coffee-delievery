import styled from 'styled-components'

export const CheckOutContainer = styled.form`
  width: var(--width);
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 2rem;
  margin: auto;

  h1,
  h2,
  h3 {
    color: var(--base-text);
  }
  h1 {
    font-family: 'Baloo 2', sans-serif;
  }
  header {
    display: flex;
    gap: 1rem;
  }
  h2 {
    font-size: 1rem;
    font-weight: 400;
  }
  h3 {
    font-size: 0.875rem;
    font-weight: 400;
  }
  svg {
    font-size: 1.375rem;
  }
`
