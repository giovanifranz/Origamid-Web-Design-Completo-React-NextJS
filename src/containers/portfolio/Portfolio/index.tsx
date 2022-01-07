import { PortfolioComponent } from '../../../components'
import { useIndex } from '../../../hooks/useIndex'
import { Slide } from './Slide'
import { params } from './params'

import { SlideProps, PortfolioProps } from './types'

export function Portfolio({ interval }: PortfolioProps) {
  const [slide] = useIndex({ array: params, interval }) as SlideProps[]

  return (
    <PortfolioComponent>
      <Slide {...slide} />
    </PortfolioComponent>
  )
}
