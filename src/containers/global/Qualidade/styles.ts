import styled from 'styled-components'
import { Container } from '../../../components'
export const QualidadeContainer = styled(Container).attrs(() => ({
  as: 'section'
}))`
  padding: 60px 0;

  &:after {
    content: '';
    width: 634px;
    height: 83px;
    display: block;
    background: url('/img/linhas.svg') no-repeat center;
    position: absolute;
    top: 209px;
    right: 162px;
    z-index: -1;
  }

  @media only screen and (min-width: 788px) and (max-width: 979px) {
    &:after {
      right: 66px;
    }
  }
  @media only screen and (max-width: 787px) {
    &:after {
      display: none;
    }
  }
`

export const BikecraftImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const QualidadeLista = styled.ul`
  li {
    margin-top: 20px;
    text-align: center;
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
    margin: 6px auto;
  }

  @media only screen and (min-width: 788px) and (max-width: 979px) {
    li {
      padding: 0 10px;
    }
  }
`
