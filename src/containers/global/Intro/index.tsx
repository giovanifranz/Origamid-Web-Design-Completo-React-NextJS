import Link from 'next/link'
import { IntroContainer } from './styles'
import { Blockquote, Container } from '../../../components'

export function Intro() {
  return (
    <IntroContainer>
      <Container as="div">
        <h1 data-anime="400" className="fadeInDown">
          Bicicletas Feitas a Mão
        </h1>
        <Blockquote data-anime="800" className="fadeInDown">
          <p>
            “não tenha nada em sua casa que você não considere útil ou acredita
            ser bonito”
          </p>
          <cite>WILLIAM MORRIS</cite>
        </Blockquote>
        <Link href="/Produtos">
          <a data-anime="1200" className="btn">
            Orçamento
          </a>
        </Link>
      </Container>
    </IntroContainer>
  )
}
