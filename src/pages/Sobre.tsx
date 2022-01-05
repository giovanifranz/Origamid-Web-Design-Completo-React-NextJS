import Head from 'next/head'
import { IntroIntern, Qualidade } from '../containers/global'
import { Missao } from '../containers/sobre'

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Bikcraft - Saiba mais sobre a gente</title>
      </Head>
      <IntroIntern title="sobre" description="conheça mais sobre a bikcraft" />
      <Missao />
      <Qualidade />
    </>
  )
}
