import { Produto } from './Produto'
import Link from 'next/link'
import { Subtitulo } from '../../../components'
import { ProdutosContainer, ProdutosLista } from './styles'

export function Produtos() {
  return (
    <ProdutosContainer className="fadeInDown" data-anime="1600">
      <Subtitulo>Produtos</Subtitulo>
      <ProdutosLista>
        <Produto type="Passeio" />
        <Produto type="Esporte" />
        <Produto type="Retro" />
      </ProdutosLista>

      <div className="call">
        <p>clique aqui e veja os detalhes dos produtos</p>
        <Link href="/Produtos">
          <a className="btn btn-preto">Produtos</a>
        </Link>
      </div>
    </ProdutosContainer>
  )
}
