import { Intro, Qualidade } from '../containers/global'
import { Produtos, Portfolio } from '../containers/home'

export default function Home() {
  return (
    <>
      <Intro />
      <Produtos />
      <Portfolio />
      <Qualidade />
    </>
  )
}
