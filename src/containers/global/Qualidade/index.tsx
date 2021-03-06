import Image from 'next/image'
import { Item } from './Item'
import { Subtitulo, Link, Call } from '../../../components'
import { QualidadeContainer, BikecraftImg, QualidadeLista } from './styles'

export function Qualidade() {
  return (
    <QualidadeContainer>
      <Subtitulo>Qualidade</Subtitulo>
      <BikecraftImg>
        <Image
          src="/img/bikcraft-qualidade.svg"
          alt="Bikcraft"
          width={200}
          height={123}
        />
      </BikecraftImg>
      <QualidadeLista>
        <Item title="Durabilidade" />
        <Item title="Design" />
        <Item title="Sustentabilidade" />
      </QualidadeLista>
      <Call>
        <p>conheça mais a nossa história</p>
        <Link href="/Sobre" hover="black">
          Sobre
        </Link>
      </Call>
    </QualidadeContainer>
  )
}
