import { IntroInternContainer } from './styles'
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
        <div className="container">
          <h1 data-anime="400" className="fadeInDown">
            {title === 'portfolio' ? 'portfólio' : title}
          </h1>
          <p data-anime="800" className="fadeInDown">
            {description}
          </p>
        </div>
      </IntroInternContainer>
    </ThemeProvider>
  )
}
