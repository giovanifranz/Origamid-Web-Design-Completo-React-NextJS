import { Formulario, Social } from '../../../components'
import { ContatoContainer, ContratoDados } from './styles'

export function Contato() {
  return (
    <ContatoContainer>
      <Formulario page="contato" />
      <ContratoDados className="grid-8">
        <h3>Dados</h3>
        <span>+55 21 93223 3232</span>
        <span>orcamento@bikcraft.com</span>
        <span>Rua Ali Perto - Botafogo</span>
        <span>Rio de Janeiro - RJ - Brasil</span>
        <h3>Redes Sociais</h3>
        <ul>
          <Social type="Facebook" />
          <Social type="Instagram" />
          <Social type="Twitter" />
        </ul>
      </ContratoDados>
    </ContatoContainer>
  )
}
