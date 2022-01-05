import Head from 'next/head'
import { IntroIntern } from '../containers/global'
import { Contato as ContatoContainer, Mapa } from '../containers/contato'

export default function Contato() {
  return (
    <>
      <Head>
        <title>Bikcraft - Contato - 21 9999-9999</title>
      </Head>
      <IntroIntern
        title="contato"
        description="tire suas dúvidas com a gente"
      />
      <ContatoContainer />
      <Mapa />
    </>
  )
}
