import { Blockquote } from './Blockquote'
import { quotes } from './quotes'
import { Container } from '../../../components'
import { useSlide } from '../../../hooks/useSlide'
import { ComentariosProps, BlockquoteProps } from './types'
import { containerVariants } from '../../../styles'

export function Comentarios({ interval }: ComentariosProps) {
  const [slide] = useSlide({ array: quotes, interval }) as BlockquoteProps[]
  return (
    <Container variants={containerVariants} initial="hidden" animate="visible">
      <Blockquote {...slide} />
    </Container>
  )
}
