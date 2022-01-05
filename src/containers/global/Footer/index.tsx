import { Social } from "../../../components";
import { FooterContainer } from "./styles";
export function Footer() {
  return (
    <footer>
      <FooterContainer>
        <div className="container">
          <div className="grid-8 footer_historia">
            <h3>Nossa História</h3>
            <p>
              O verdadeiro segredo da felicidade está em ter um genuíno
              interesse por todos os detalhes da vida cotidiana cotidiana.
              interesse por todos os detalhes da vida cotidiana cotidiana.
            </p>
          </div>

          <div className="grid-4 footer_contato">
            <h3>Contato</h3>
            <ul>
              <li>- 21 23232-4343</li>
              <li>- contato@bikcraft.com</li>
              <li>- Botafago - RJ</li>
            </ul>
          </div>

          <div className="grid-4 footer_redes">
            <h3>Contato</h3>
            <ul>
              <Social type="Facebook" />
              <Social type="Instagram" />
              <Social type="Twitter" />
            </ul>
          </div>
        </div>
      </FooterContainer>

      <div className="copy">
        <div className="container">
          <p className="grid-16">Bikcraft 2019 - Alguns direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
