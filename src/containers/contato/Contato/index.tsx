import { Formulario, Social } from '../../../components'
import { ContatoContainer } from './styles'

export function Contato() {
  return (
    <ContatoContainer className="container fadeInDown" data-anime="1200">
      <Formulario color="black" marginMobile="40px" />
      <div className="contato_dados grid-8">
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
      </div>
    </ContatoContainer>
  )
}
