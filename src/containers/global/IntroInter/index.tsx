import { IntroInternContainer } from './styles'
import { Content } from '../../../components'
import { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'
import { introVariants, childVariantsTopDown } from '../../../styles/variant'

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
        <Content variants={introVariants} initial="hidden" animate="visible">
          <motion.h1 variants={childVariantsTopDown}>
            {title === 'portfolio' ? 'portfólio' : title}
          </motion.h1>
          <motion.p variants={childVariantsTopDown}>{description}</motion.p>
        </Content>
      </IntroInternContainer>
    </ThemeProvider>
  )
}
