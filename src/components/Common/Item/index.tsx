import { ReactNode } from 'react'
import { ItemContainer, ItemIcon } from './styles'

interface ItemProps {
  content: string
  icon: ReactNode
  backgroundColor: string
  description?: string
}

export const Item = ({
  content,
  icon,
  backgroundColor,
  description,
}: ItemProps) => {
  return (
    <ItemContainer>
      <ItemIcon color={backgroundColor}>{icon}</ItemIcon>
      <span>
        {content} <strong>{description}</strong>{' '}
      </span>
    </ItemContainer>
  )
}
