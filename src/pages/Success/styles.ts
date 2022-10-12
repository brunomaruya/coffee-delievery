import styled from 'styled-components'

export const SuccessContainer = styled.section`
  width: var(--width);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: auto;

  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
`

export const SuccessWrapper = styled.div`
  h1 {
    color: var(--yellow-dark);
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 41.6px;
  }
  h3 {
    color: var(--base-subtitle);
    font-size: 1.25rem;
    font-weight: 400;
    margin-bottom: 2.5rem;
  }
`

export const OrderInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  padding: 2.5rem;
  background: var(--white);
  background-clip: padding-box;
  border-radius: 10px 50px;
  &::after {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    background: linear-gradient(45deg, var(--yellow), var(--purple));
    border-radius: 10px 50px;
  }
`
