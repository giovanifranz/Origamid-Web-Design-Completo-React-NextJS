import { IntroInternContainer } from './styles'
import { Content } from '../../../components'
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
        <Content
          variants={{
            hidden: {
              opacity: 0,
              y: '-100%',
              x: 0
            },
            visible: {
              opacity: 1,
              y: 0,
              x: 0,
              transition: {
                type: 'tween',
                duration: 1.2
              }
            }
          }}
          initial="hidden"
          animate="visible"
        >
          <h1>{title === 'portfolio' ? 'portfólio' : title}</h1>
          <p>{description}</p>
        </Content>
      </IntroInternContainer>
    </ThemeProvider>
  )
}
