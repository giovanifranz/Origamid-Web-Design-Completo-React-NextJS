import styled from "styled-components";

export const OrcamentoContainer = styled.section`
  background: var(--black);
  width: 100%;
  margin-top: 60px;
  padding: 40px 0;

  h2 {
    color: var(--yellow);
  }

  h2:after {
    background: var(--yellow);
  }
`;

export const OrcamentoDados = styled.div`
  color: var(--white);

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
    font-family: Georgia, "Times New Roman", serif;
  }

  span:nth-of-type(2) {
    margin-bottom: 40px;
  }

  ul {
    padding-right: 60px;
  }

  ul li {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 14px;
    padding: 10px 15px;
  }

  ul li:nth-child(odd) {
    background: #1d1d1d;
  }

  p {
    margin: 8px 0;
  }

  @media only screen and (max-width: 787px) {
    ul {
      padding-right: 0px;
    }
  }
`;
