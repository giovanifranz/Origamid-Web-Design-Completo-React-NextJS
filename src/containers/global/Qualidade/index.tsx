import Image from 'next/image'
import Link from 'next/link'
import { Item } from './Item'
import { QualidadeContainer, BikecraftImg, QualidadeLista } from './styles'

export function Qualidade() {
  return (
    <QualidadeContainer className="container">
      <h2 className="subtitulo">Qualidade</h2>
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
