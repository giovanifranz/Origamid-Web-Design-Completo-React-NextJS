import { Blockquote } from './Blockquote'
import { quotes } from './quotes'
import { Container } from '../../../components'
import { useSlide } from '../../../hooks/useSlide'
import { ComentariosProps, BlockquoteProps } from './types'

export function Comentarios({ interval }: ComentariosProps) {
  const [slide] = useSlide({ array: quotes, interval }) as BlockquoteProps[]

  return (
    <Container>
      <Blockquote {...slide} />
    </Container>
  )
}
