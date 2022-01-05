import styled from 'styled-components'

export const ProdutosContainer = styled.section`
  padding: 60px 0;

  .produtos_lista li {
    background: var(--yellow);
    text-align: center;
  }

  .produtos_lista li img {
    margin: 0 auto;
  }

  .produtos_lista li h3 {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-top: 20px;
  }

  .produtos_lista li h3:after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: var(--black);
    margin: 2px auto;
  }

  .produtos_lista li p {
    padding: 10px 20px 20px 20px;
  }

  .produtos_icone {
    background: var(--black);
    padding: 20px;
  }
`
