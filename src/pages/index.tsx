import Head from 'next/head'
import { Intro, Qualidade } from '../containers/global'
import { Produtos, Portfolio } from '../containers/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bikcraft - Bicicletas Personalizadas</title>
      </Head>
      <Intro />
      <Produtos />
      <Portfolio />
      <Qualidade />
    </>
  )
}
