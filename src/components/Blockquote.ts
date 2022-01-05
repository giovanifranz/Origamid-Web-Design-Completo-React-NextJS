import styled from 'styled-components'

export const Blockquote = styled.blockquote`
  max-width: 320px;
  margin: 0 auto;
  margin-bottom: 40px;
  color: white;

  p {
    font-style: italic;
  }

  p:before,
  p:after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: #fff;
    margin: 14px auto 10px auto;
  }

  cite {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0.1em;
  }
`
