import { Produto } from "./Produto";
import { ProdutosContainer } from "./styles";

export function Produtos() {
  return (
    <ProdutosContainer className="container fadeInDown" data-anime="1600">
      <h2 className="subtitulo">Produtos</h2>
      <ul className="produtos_lista">
        <Produto type="Passeio" />
        <Produto type="Esporte" />
        <Produto type="Retro" />
      </ul>

      <div className="call">
        <p>clique aqui e veja os detalhes dos produtos</p>
        <a href="produtos.html" className="btn btn-preto">
          Produtos
        </a>
      </div>
    </ProdutosContainer>
  );
}
