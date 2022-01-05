import styled from 'styled-components'
import { Container } from '../../../components'

export const PordutoItemContainer = styled(Container).attrs(() => ({
  as: 'section'
}))`
  padding-top: 60px;

  h2 {
    color: var(--white);
    font-size: 36px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: bold;
    position: relative;
    top: -180px;
    text-align: center;
    margin-bottom: -56px;
  }

  h2:after,
  h2:before {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: var(--white);
    margin: 6px auto 8px auto;
  }

  @media only screen and (min-width: 788px) and (max-width: 979px) {
    h2 {
      top: -150px;
      margin-bottom: -56px;
    }
  }
  @media only screen and (max-width: 787px) {
    h2 {
      top: -100px;
      margin-bottom: -68px;
    }
  }
`

export const ProdutoInfo = styled.div`
  background: var(--black);

  p {
    color: var(--white);
    font-size: 18px;
    line-height: 25px;
    height: 180px;
    padding: 30px 40px;
  }

  ul li {
    background: var(--yellow);
    text-transform: uppercase;
    font-size: 18px;
    line-height: 20px;
    font-weight: bold;
    float: left;
    width: 229px;
    height: 49px;
    text-align: center;
    padding-top: 16px;
  }

  ul li:nth-child(1),
  ul li:nth-child(2) {
    margin-bottom: 2px;
  }

  ul li:nth-child(even) {
    margin-left: 2px;
  }

  @media only screen and (min-width: 788px) and (max-width: 979px) {
    p {
      font-size: 14px;
      line-height: 20px;
      height: 122px;
      padding: 20px 30px;
    }

    ul li {
      width: 181px;
      height: 49px;
    }
  }

  @media only screen and (max-width: 787px) {
    p {
      font-size: 14px;
      line-height: 20px;
      height: auto;
      padding: 20px 30px;
    }

    ul li {
      width: 149px;
      height: 49px;
      font-size: 14px;
      line-height: 20px;
      padding-top: 14px;
    }
  }
`
export const ProdutoIcone = styled.div`
  background: var(--black);
  padding: 70px 0;

  img {
    margin: 0 auto;
  }

  @media only screen and (min-width: 788px) and (max-width: 979px) {
    padding: 41px 0;
  }
  @media only screen and (max-width: 787px) {
    padding: 41px 0;
  }
`
