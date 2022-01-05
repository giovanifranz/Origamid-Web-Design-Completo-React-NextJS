import { Blockquote } from './Blockquote'

export function Comentarios() {
  return (
    <section
      className="container fadeInDown"
      data-slide="quote"
      data-anime="1200"
    >
      <Blockquote
        text="Pedalar sempre foi a minha paixão, o que o pessoal da Bikcraft fez
          foi intensificar o meu amor por esta atividade. Recomendo à todos que
          amo."
        author="Barbara Moss"
      />

      <Blockquote
        text="Nada melhor do que dar um rolê com a minha Bikcraft na orla. Essa é a
        minha companheira mais fiel, nunca me traiu e está sempre a minha
        disposição."
        author="Jhony Rato"
      />

      <Blockquote
        text="Aqueles que ainda não possuem uma Bikcraft, não sabem o que estão
        perdendo. A precisão é absurda e a velocidade transcendental. Nunca
        vida nada igual."
        author="Bernardo"
      />
    </section>
  )
}
