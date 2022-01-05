import styled from 'styled-components'

export const BlockquoteComponent = styled.blockquote`
  padding: 60px 0;
  max-width: 460px;
  margin: 0 auto;

  p {
    text-align: center;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 18px;
    line-height: 25px;
    font-style: italic;
    margin-bottom: 20px;
  }

  cite {
    font-size: 18px;
    font-weight: bold;
    float: right;
    font-style: normal;
  }
`
