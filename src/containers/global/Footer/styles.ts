import styled from 'styled-components'

export const FooterContainer = styled.div`
  width: 100%;
  background: var(--black);
  color: var(--white);
  padding: 20px 0;

  h3 {
    font-size: 18px;
    line-height: 25px;
    color: var(--yellow);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: bold;
  }

  h3:after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: var(--yellow);
    margin: 6px 0 12px 0;
  }

  .footer_historia {
    padding-right: 40px;
  }

  .footer_contato ul li {
    font-size: 14px;
    line-height: 20px;
    font-family: Georgia, 'Times New Roman', serif;
  }

  .footer_redes ul li {
    display: inline-block;
    margin-right: 10px;
  }

  .footer_redes ul li a {
    border: 3px solid var(--yellow);
    display: block;
    padding: 10px;
  }

  .footer_redes ul li a:hover {
    border-color: var(--white);
  }

  @media only screen and (min-width: 788px) and (max-width: 979px) {
    .footer_redes ul li a {
      border: 3px solid var(--yellow);
      display: block;
      padding: 6px;
    }

    .footer_redes ul li a img {
      width: 26px;
      height: 26px;
    }
  }
`
