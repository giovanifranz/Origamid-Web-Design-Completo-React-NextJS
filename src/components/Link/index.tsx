import { useWhiteBlack } from '../../hooks/useWhiteBlack'
import { ThemeProvider } from 'styled-components'
import { StyledAnchor } from './styles'
import { AnchorProps } from './types'
import NextLink from 'next/link'

export function Link({ hover, children, href }: AnchorProps) {
  const theme = useWhiteBlack(hover)

  return (
    <ThemeProvider theme={theme}>
      <NextLink href={href} passHref>
        <StyledAnchor>{children}</StyledAnchor>
      </NextLink>
    </ThemeProvider>
  )
}
