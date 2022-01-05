import Image from 'next/image'
import Link from 'next/link'
import { Item } from './Item'
import { Subtitulo } from '../../../components'
import { QualidadeContainer, BikecraftImg, QualidadeLista } from './styles'

export function Qualidade() {
  return (
    <QualidadeContainer className="container">
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
      <div className="call">
        <p>conheça mais a nossa história</p>
        <Link href="/Sobre">
          <a className="btn btn-preto">Sobre</a>
        </Link>
      </div>
    </QualidadeContainer>
  )
}
