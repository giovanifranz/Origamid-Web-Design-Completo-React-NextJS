import { Content, Foto } from '../../../components'
import { fadeInFadeOut } from '../../../styles'
import { SlideProps } from './types'
import { memo } from 'react'

export function SlideComponent({ firsCard, secondCard, bigCard }: SlideProps) {
  return (
    <Content variants={fadeInFadeOut} initial="hidden" animate="visible">
      <ul className="portfolio_lista">
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
  )
}

export const Slide = memo(SlideComponent, (prevProps, nextProps) => {
  return Object.is(prevProps, nextProps)
})
