import { IntroContainer } from "./styles";
import { Blockquote } from "../../../components";

export function Intro() {
  return (
    <IntroContainer>
      <div className="container">
        <h1 data-anime="400" className="fadeInDown">
          Bicicletas Feitas a Mão
        </h1>
        <Blockquote data-anime="800" className="fadeInDown">
          <p>
            “não tenha nada em sua casa que você não considere útil ou acredita
            ser bonito”
          </p>
          <cite>WILLIAM MORRIS</cite>
        </Blockquote>
        <a data-anime="1200" href="produtos.html" className="btn">
          Orçamento
        </a>
      </div>
    </IntroContainer>
  );
}
