import { Produto } from './Produto'
import { Subtitulo, Button } from '../../../components'
import { ProdutosContainer, ProdutosLista } from './styles'

export function Produtos() {
  return (
    <ProdutosContainer as="section" className="fadeInDown" data-anime="1600">
      <Subtitulo>Produtos</Subtitulo>
      <ProdutosLista>
        <Produto type="Passeio" />
        <Produto type="Esporte" />
        <Produto type="Retro" />
      </ProdutosLista>

      <div className="call">
        <p>clique aqui e veja os detalhes dos produtos</p>
        <Button href="/Produtos" hover="black">
          Produtos
        </Button>
      </div>
    </ProdutosContainer>
  )
}
