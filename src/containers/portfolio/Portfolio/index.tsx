import { PortfolioComponent } from '../../../components'
import { useSlide } from '../../../hooks/useSlide'
import { Slide } from './Slide'
import { params } from './params'
import { SlideProps, PortfolioProps } from './types'
import { containerVariants } from '../../../styles'

export function Portfolio({ interval }: PortfolioProps) {
  const [slide] = useSlide({ array: params, interval }) as SlideProps[]

  return (
    <PortfolioComponent
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Slide {...slide} />
    </PortfolioComponent>
  )
}
