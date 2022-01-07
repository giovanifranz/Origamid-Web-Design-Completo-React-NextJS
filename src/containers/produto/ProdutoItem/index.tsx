import Image from 'next/image'
import {
  PordutoItemContainer,
  ProdutoInfo,
  ProdutoIcone,
  ProdutoImagem
} from './styles'

interface ProdutoItemProps {
  type: 'esporte' | 'passeio' | 'retro'
}

export function ProdutoItem({ type }: ProdutoItemProps) {
  return (
    <PordutoItemContainer>
      <div className="grid-11">
        <ProdutoImagem>
          <Image
            src={`/img/produtos/bikcraft-${type}-1.jpg`}
            width={640}
            height={280}
            alt="Bikcraft Passeio"
          />
        </ProdutoImagem>
        <h2>{type}</h2>
      </div>
      <ProdutoIcone className="grid-5">
        <ProdutoImagem>
          <Image
            src={`/img/produtos/${type}.svg`}
            alt={`Icone ${type}`}
            width={200}
            height={140}
          />
        </ProdutoImagem>
      </ProdutoIcone>
      <div className="grid-8">
        <ProdutoImagem>
          <Image
            src={`/img/produtos/bikcraft-${type}-2.jpg`}
            alt="Bikcraft Passeio"
            width={460}
            height={280}
          />
        </ProdutoImagem>
      </div>
      <ProdutoInfo className="grid-8">
        <p>
          No mundo atual, a contínua expansão de nossa atividade cumpre um papel
          essencial na formula da gestão inovadora da qual fazemos parte
          inovadora da qual fazemos parte.
        </p>
        <ul>
          <li>Conforto</li>
          <li>Velocidade</li>
          <li>Design</li>
          <li>Versatilidade</li>
        </ul>
      </ProdutoInfo>
    </PordutoItemContainer>
  )
}
