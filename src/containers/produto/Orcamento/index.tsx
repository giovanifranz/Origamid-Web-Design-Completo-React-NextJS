import { OrcamentoContainer, OrcamentoDados } from './styles'
import { Formulario, Subtitulo } from '../../../components'

export function Orcamento() {
  return (
    <OrcamentoContainer>
      <div className="container">
        <Subtitulo>Orçamento</Subtitulo>
        <Formulario page="produto" />

        <OrcamentoDados className="grid-8">
          <h3>Dados</h3>
          <span>+55 21 93223 3232</span>
          <span>orcamento@bikcraft.com</span>
          <h3>Monte a sua Bikcraft</h3>
          <p>Escolha as especificações:</p>
          <ul>
            <li>- Cores</li>
            <li>- Estilo</li>
            <li>- Medidas</li>
            <li>- Acessórios</li>
            <li>- E Outros</li>
          </ul>
        </OrcamentoDados>
      </div>
    </OrcamentoContainer>
  )
}
