import { Blockquote } from './Blockquote'
import { quotes } from './quotes'
import { Container } from '../../../components'
import { useEffect, useState } from 'react'

interface ComentarioProps {
  text: string
  author: string
}

export function Comentarios() {
  const [comentario, setComentario] = useState(quotes[0])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const newSlideIndex = index >= quotes.length - 1 ? 0 : index + 1

      setIndex(newSlideIndex)
    }, 3000)

    return () => clearTimeout(timer)
  })

  useEffect(() => {
    setComentario(quotes[index])
  }, [index])

  return (
    <Container
      as="section"
      className="fadeInDown"
      data-slide="quote"
      data-anime="1200"
    >
      <Blockquote {...comentario} />
    </Container>
  )
}
