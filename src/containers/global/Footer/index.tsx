import { Social, Content } from '../../../components'
import {
  FooterContainer,
  FooterContato,
  FooterHistoria,
  FooterRedes,
  Copy
} from './styles'
export function Footer() {
  return (
    <footer>
      <FooterContainer>
        <Content>
          <FooterHistoria className="grid-8">
            <h3>Nossa História</h3>
            <p>
              O verdadeiro segredo da felicidade está em ter um genuíno
              interesse por todos os detalhes da vida cotidiana cotidiana.
              interesse por todos os detalhes da vida cotidiana cotidiana.
            </p>
          </FooterHistoria>

          <FooterContato className="grid-4">
            <h3>Contato</h3>
            <ul>
              <li>- 21 23232-4343</li>
              <li>- contato@bikcraft.com</li>
              <li>- Botafago - RJ</li>
            </ul>
          </FooterContato>

          <FooterRedes className="grid-4">
            <h3>Contato</h3>
            <ul>
              <Social type="Facebook" />
              <Social type="Instagram" />
              <Social type="Twitter" />
            </ul>
          </FooterRedes>
        </Content>
      </FooterContainer>

      <Copy>
        <Content>
          <p className="grid-16">Bikcraft 2019 - Alguns direitos reservados.</p>
        </Content>
      </Copy>
    </footer>
  )
}
