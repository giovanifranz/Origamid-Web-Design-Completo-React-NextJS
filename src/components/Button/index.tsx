import { ThemeProvider } from 'styled-components'
import { StyledButton } from './styles'
import { ButtonProps } from './types'
import { useWhiteBlack } from '../../hooks/useWhiteBlack'
import { useRouter } from 'next/router'

export function Button({ hover, children, href }: ButtonProps) {
  const theme = useWhiteBlack(hover)
  const router = useRouter()

  return (
    <ThemeProvider theme={theme}>
      <StyledButton onClick={() => router.push(href)}> {children}</StyledButton>
    </ThemeProvider>
  )
}
