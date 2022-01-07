import { Blockquote } from './Blockquote'
import { quotes } from './quotes'
import { Container } from '../../../components'
import { useIndex } from '../../../hooks/useIndex'
import { ComentariosProps } from './types'

export function Comentarios({ interval }: ComentariosProps) {
  const [slide] = useIndex({ array: quotes, interval })

  return (
    <Container
      as="section"
      className="fadeInDown"
      data-slide="quote"
      data-anime="1200"
    >
      <Blockquote {...slide} />
    </Container>
  )
}
