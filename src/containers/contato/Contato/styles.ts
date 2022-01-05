import styled from 'styled-components'

export const ContatoContainer = styled.section`
  padding: 40px 0;
`
export const ContratoDados = styled.div`
  h3 {
    font-size: 18px;
    line-height: 25px;
    text-transform: uppercase;
    color: var(--yellow);
    font-weight: bold;
  }

  span {
    display: block;
    font-size: 18px;
    line-height: 30px;
    font-family: Georgia, 'Times New Roman', serif;
  }

  span:nth-of-type(even) {
    margin-bottom: 30px;
  }

  ul {
    margin-top: 10px;
  }

  ul li {
    display: inline-block;
    margin-right: 10px;
  }

  ul li a {
    border: 3px solid var(--yellow);
    display: block;
    padding: 10px;
  }

  ul li a:hover {
    border-color: var(--black);
  }
`
