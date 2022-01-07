import { StyledBlockquote } from './styles'
import { memo } from 'react'

interface BlockquoteProps {
  text: string
  author: string
}

export function BlockquoteComponent({ text, author }: BlockquoteProps) {
  return (
    <StyledBlockquote>
      <p>“{text}”</p>
      <cite>{author}</cite>
    </StyledBlockquote>
  )
}

export const Blockquote = memo(BlockquoteComponent, (prevProps, nextProps) => {
  return Object.is(prevProps, nextProps)
})
