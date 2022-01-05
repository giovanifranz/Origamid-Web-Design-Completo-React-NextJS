import Head from 'next/head'
import { IntroIntern } from '../containers/global'
import { Orcamento, ProdutoItem } from '../containers/produto'

export default function Produto() {
  return (
    <>
      <Head>
        <title>Bikcraft - Conheça as linhas Passeio, Retrô e Esporte</title>
      </Head>
      <IntroIntern
        title="produtos"
        description="conheça todos os nossos produtos"
      />
      <ProdutoItem type="passeio" />
      <ProdutoItem type="esporte" />
      <ProdutoItem type="retro" />
      <Orcamento />
    </>
  )
}
