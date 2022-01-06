import { PortfolioComponent, Container, Foto } from '../../../components'
export function Portfolio() {
  return (
    <PortfolioComponent>
      <Container as="div" data-slide="portfolio">
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
      </Container>
    </PortfolioComponent>
  )
}
