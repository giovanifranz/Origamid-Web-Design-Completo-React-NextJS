import { Content, Foto } from '../../../components'
import { fadeInFadeOut } from '../../../styles'
import { AnimatePresence } from 'framer-motion'
import { SlideProps } from './types'
import { memo } from 'react'

export function SlideComponent({ firsCard, secondCard, bigCard }: SlideProps) {
  return (
    <AnimatePresence>
      {(firsCard || secondCard || bigCard) && (
        <Content
          variants={fadeInFadeOut}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
        >
          <ul>
            <li className="grid-8">
              <Foto type={firsCard} width={460} />
            </li>
            <li className="grid-8">
              <Foto type={secondCard} width={460} />
            </li>
            <li className="grid-16">
              <Foto type={bigCard} width={940} />
            </li>
          </ul>
        </Content>
      )}
    </AnimatePresence>
  )
}

export const Slide = memo(SlideComponent, (prevProps, nextProps) => {
  return Object.is(prevProps, nextProps)
})
