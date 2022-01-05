import { IntroIntern } from '../containers/global'
import {
  Comentarios,
  Portfolio as PortfolioContainer
} from '../containers/portfolio'

export default function Portfolio() {
  return (
    <>
      <IntroIntern
        title="portfolio"
        description="conheça os projetos que amamos mostrar"
      />
      <Comentarios />
      <PortfolioContainer />
    </>
  )
}
