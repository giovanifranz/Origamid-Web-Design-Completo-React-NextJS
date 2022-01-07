import { StyledBlockquote } from './styles'
import { BlockquoteProps } from './types'
import { memo } from 'react'

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
