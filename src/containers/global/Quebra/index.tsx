import { Blockquote } from '../../../components/Blockquote'
import { QuebraComponent } from './styles'

export function Quebra() {
  return (
    <QuebraComponent>
      <Blockquote className="quote-externo">
        <p>
          “o verdadeiro segredo da felicidade está em ter um genuíno interesse
          por todos os detalhes da vida cotidiana.”
        </p>
        <cite>WILLIAM MORRIS</cite>
      </Blockquote>
    </QuebraComponent>
  )
}
