import {
  Foto,
  PortfolioComponent,
  Subtitulo,
  Container,
  Button
} from '../../components'

export function Portfolio() {
  return (
    <PortfolioComponent>
      <Container as="div">
        <Subtitulo>Portfólio</Subtitulo>
        <ul className="portfolio_lista">
          <li className="grid-8">
            <Foto type="Retro" width={460} />
          </li>
          <li className="grid-8">
            <Foto type="Passeio" width={460} />
          </li>
          <li className="grid-16">
            <Foto type="Esporte" width={940} />
          </li>
        </ul>
        <div className="call">
          <p>conheça mais o nosso portfólio</p>
          <Button href="/Portfolio" hover="white">
            Portfólio
          </Button>
        </div>
      </Container>
    </PortfolioComponent>
  )
}
