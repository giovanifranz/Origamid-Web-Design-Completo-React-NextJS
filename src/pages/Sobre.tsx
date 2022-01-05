import { IntroIntern, Qualidade } from '../containers/global'
import { Missao } from '../containers/sobre'

export default function Sobre() {
  return (
    <>
      <IntroIntern title="sobre" description="conheça mais sobre a bikcraft" />
      <Missao />
      <Qualidade />
    </>
  )
}
