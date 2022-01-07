import Head from 'next/head'
import { IntroIntern } from '../containers/global'
import {
  Comentarios,
  Portfolio as PortfolioContainer
} from '../containers/portfolio'

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Bikcraft - Conheça o portfólio de clientes</title>
      </Head>
      <IntroIntern
        title="portfolio"
        description="conheça os projetos que amamos mostrar"
      />
      <Comentarios interval={2000} />
      <PortfolioContainer interval={2000} />
    </>
  )
}
