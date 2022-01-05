import Image from 'next/image'
import { ProdutosIcone } from './styles'
interface ProdutoProps {
  type: 'Passeio' | 'Esporte' | 'Retro'
}

export function Produto({ type }: ProdutoProps) {
  return (
    <li className="grid-1-3">
      <ProdutosIcone>
        <Image
          src={`/img/produtos/${type.toLowerCase()}.svg`}
          alt="Bikcraft Passeio"
          width={200}
          height={140}
        />
      </ProdutosIcone>
      <h3>{type}</h3>
      <p>
        Ainda assim, existem dúvidas a respeito de como a necessidade de
        renovação.
      </p>
    </li>
  )
}
