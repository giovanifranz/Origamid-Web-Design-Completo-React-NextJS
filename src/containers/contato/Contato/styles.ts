import styled from 'styled-components'

export const ContatoContainer = styled.section`
  padding: 40px 0;

  .contato_dados h3 {
    font-size: 18px;
    line-height: 25px;
    text-transform: uppercase;
    color: var(--yellow);
    font-weight: bold;
  }

  .contato_dados span {
    display: block;
    font-size: 18px;
    line-height: 30px;
    font-family: Georgia, 'Times New Roman', serif;
  }

  .contato_dados span:nth-of-type(even) {
    margin-bottom: 30px;
  }

  .contato_dados ul {
    margin-top: 10px;
  }

  .contato_dados ul li {
    display: inline-block;
    margin-right: 10px;
  }

  .contato_dados ul li a {
    border: 3px solid var(--yellow);
    display: block;
    padding: 10px;
  }

  .contato_dados ul li a:hover {
    border-color: var(--black);
  }
`
