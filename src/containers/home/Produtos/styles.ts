import styled from 'styled-components'

export const ProdutosContainer = styled.section`
  padding: 60px 0;
`
export const ProdutosIcone = styled.div`
  background: var(--black);
`

export const ProdutosLista = styled.ul`
  li {
    background: var(--yellow);
    text-align: center;
  }

  li img {
    margin: 0 auto;
  }

  li h3 {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-top: 20px;
  }

  li h3:after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: var(--black);
    margin: 2px auto;
  }

  li p {
    padding: 10px 20px 20px 20px;
  }
`
