import styled from 'styled-components'

const Sub = styled.h2`
  font-size: 24px;
  line-height: 30px;
  font-weight: bold;
  letter-spacing: 0.1em;
  color: var(--black);
  text-transform: uppercase;

  &:after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: var(--black);
    margin: 8px auto;
  }
`

export const Subtitulo = styled(Sub)`
  text-align: center;
  margin-bottom: 40px;
`

export const SubtituloInterno = styled(Sub)`
  margin-bottom: 20px;
`
