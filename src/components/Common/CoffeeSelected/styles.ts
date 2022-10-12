import styled from 'styled-components'

export const CoffeeSelectedWrapper = styled.div`
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
