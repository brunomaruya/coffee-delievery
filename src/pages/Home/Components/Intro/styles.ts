import styled from 'styled-components'

export const IntroContainer = styled.main`
  display: flex;
  justify-content: space-between;
  margin: auto;
  img {
    max-width: 50%;
  }
`

export const Content = styled.section`
  width: 36.75rem;
  h1 {
    padding-bottom: 1rem;
    word-wrap: break-word;
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 3.9rem;
  }
  h6 {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.625rem;
  }
`

export const ItemsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 3rem;
`
