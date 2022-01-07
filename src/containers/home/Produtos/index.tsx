import { Produto } from './Produto'
import { Subtitulo, Link, Call } from '../../../components'
import { ProdutosContainer, ProdutosLista } from './styles'
import { containerVariants } from '../../../styles'
export function Produtos() {
  return (
    <ProdutosContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Subtitulo>Produtos</Subtitulo>
      <ProdutosLista>
        <Produto type="Passeio" />
        <Produto type="Esporte" />
        <Produto type="Retro" />
      </ProdutosLista>

      <Call>
        <p>clique aqui e veja os detalhes dos produtos</p>
        <Link href="/Produtos" hover="black">
          Produtos
        </Link>
      </Call>
    </ProdutosContainer>
  )
}
