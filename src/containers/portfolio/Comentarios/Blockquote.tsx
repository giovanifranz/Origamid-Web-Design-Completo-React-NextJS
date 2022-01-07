import { StyledBlockquote } from './styles'
import { BlockquoteProps } from './types'
import { memo } from 'react'
import { fadeInFadeOut } from '../../../styles'
import { motion, AnimatePresence } from 'framer-motion'

export function BlockquoteComponent({ text, author }: BlockquoteProps) {
  const MotionBlockquote = motion(StyledBlockquote)

  return (
    <AnimatePresence>
      {(author || text) && (
        <MotionBlockquote
          variants={fadeInFadeOut}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
        >
          <p>“{text}”</p>
          <cite>{author}</cite>
        </MotionBlockquote>
      )}
    </AnimatePresence>
  )
}

export const Blockquote = memo(BlockquoteComponent, (prevProps, nextProps) => {
  return Object.is(prevProps, nextProps)
})
