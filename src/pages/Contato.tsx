import { IntroIntern } from '../containers/global'
import { Contato as ContatoContainer, Mapa } from '../containers/contato'

export default function Contato() {
  return (
    <>
      <IntroIntern
        title="contato"
        description="tire suas dúvidas com a gente"
      />
      <ContatoContainer />
      <Mapa />
    </>
  )
}
