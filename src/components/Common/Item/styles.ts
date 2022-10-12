import styled from 'styled-components'

export const ItemContainer = styled.div`
  max-width: 20rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  span {
    color: var(--base-text);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

type IconItemType = {
  color: string
}

export const ItemIcon = styled.div<IconItemType>`
  min-width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.2rem;
  color: var(--white);
  background-color: var(${(props) => props.color});
  border-radius: 50%;
`
