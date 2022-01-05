import { Foto } from '../../components/Foto'
import { PortfolioComponent } from '../../components'

export function Portfolio() {
  return (
    <PortfolioComponent>
      <div className="container">
        <h2 className="subtitulo">Portfólio</h2>
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
          <a href="portfolio.html" className="btn">
            Portfólio
          </a>
        </div>
      </div>
    </PortfolioComponent>
  )
}
