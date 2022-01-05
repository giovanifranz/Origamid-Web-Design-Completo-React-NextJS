import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: var(--yellow);
  padding: 15px 0;
  z-index: 10;

  .header_menu {
    text-align: right;
  }

  .header_menu ul li {
    display: inline-block;
    margin-left: 25px;
    margin-top: 20px;
  }

  .header_menu ul li a {
    color: var(--black);
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 14px;
    line-height: 20px;
    padding: 10px 0;
  }

  .header_menu ul li a:hover {
    color: var(--white);
  }

  .header_menu ul li a.menu_ativo {
    color: var(--white);
  }

  @media only screen and (max-width: 787px) {
    .header {
      position: relative;
      padding-bottom: 0px;
    }

    .header img {
      margin: 0 auto 10px auto;
    }

    .header_menu {
      text-align: center;
    }

    .header_menu ul li {
      margin: 5px;
    }

    .header_menu ul li a {
      border: 4px solid var(--black);
      width: 136px;
      display: block;
      float: left;
    }

    .header_menu ul li a:hover {
      border-color: var(--white);
    }

    .header_menu ul li a.menu_ativo {
      border-color: var(--white);
    }
  }
`
