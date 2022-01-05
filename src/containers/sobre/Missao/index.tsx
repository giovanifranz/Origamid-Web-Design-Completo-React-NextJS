import Image from 'next/image'
import { SubtituloInterno } from '../../../components'
import { MissaoContainer, FotoEquipe } from './styles'

export function Missao() {
  return (
    <MissaoContainer className="fadeInDown" data-anime="1200">
      <div className="grid-10">
        <SubtituloInterno>História, Missão e Visão</SubtituloInterno>
        <p>
          No mundo atual, a contínua expansão de nossa atividade cumpre um papel
          essencial na formulação da gestão inovadora da qual fazemos parte da
          qual fazemos parte.
        </p>
        <p>
          No mundo atual, a contínua expansão de nossa atividade cumpre um papel
          essencial na formulação da gestão inovadora da qual fazemos parte da
          qual fazemos parte.
        </p>
      </div>
      <div className="grid-6">
        <SubtituloInterno>Valores</SubtituloInterno>
        <ul>
          <li>- Qualidade no processo com</li>
          <li>- Foco no cliente sem perder a</li>
          <li>- Diversão, preservando a</li>
          <li>- Natureza com sustentabilidade</li>
        </ul>
      </div>

      <FotoEquipe className="grid-16">
        <Image
          src="/img/equipe-bikcraft.jpg"
          alt="Equipe Bikcraft"
          width={940}
          height={320}
        />
      </FotoEquipe>
    </MissaoContainer>
  )
}
