import { IntroInternContainer } from './styles'
import { Container } from '../../../components'
import { ThemeProvider } from 'styled-components'
interface IntroInternProps {
  title: 'portfolio' | 'produtos' | 'contato' | 'sobre'
  description: string
}

export function IntroIntern({ title, description }: IntroInternProps) {
  const theme = {
    bg: `url('/img/bg-${title}.jpg') no-repeat center`
  }

  return (
    <ThemeProvider theme={theme}>
      <IntroInternContainer>
        <Container as="div">
          <h1 data-anime="400" className="fadeInDown">
            {title === 'portfolio' ? 'portfólio' : title}
          </h1>
          <p data-anime="800" className="fadeInDown">
            {description}
          </p>
        </Container>
      </IntroInternContainer>
    </ThemeProvider>
  )
}
