import {
  Foto,
  PortfolioComponent,
  Subtitulo,
  Content,
  Link,
  Call
} from '../../components'

export function Portfolio() {
  return (
    <PortfolioComponent>
      <Content>
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
        <Call>
          <p>conheça mais o nosso portfólio</p>
          <Link href="/Portfolio" hover="white">
            Portfólio
          </Link>
        </Call>
      </Content>
    </PortfolioComponent>
  )
}
