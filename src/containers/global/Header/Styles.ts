import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: var(--yellow);
  padding: 15px 0;
  z-index: 10;
`

export const HeaderMenu = styled.nav`
  text-align: right;

  ul li {
    display: inline-block;
    margin-left: 25px;
    margin-top: 20px;
  }

  ul li a {
    color: var(--black);
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 14px;
    line-height: 20px;
    padding: 10px 0;
  }

  ul li a:hover {
    color: var(--white);
  }

  ul li a.menu_ativo {
    color: var(--white);
  }

  @media only screen and (max-width: 787px) {
    text-align: center;

    ul li {
      margin: 5px;
    }

    ul li a {
      border: 4px solid var(--black);
      width: 136px;
      display: block;
      float: left;
    }

    ul li a:hover {
      border-color: var(--white);
    }

    ul li a.menu_ativo {
      border-color: var(--white);
    }
  }
`

export const Logo = styled.div`
  @media only screen and (max-width: 787px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-bottom: 0px;
    margin: 0 auto 10px auto;
  }
`
