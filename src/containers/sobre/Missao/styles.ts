import styled from 'styled-components'
import { Container } from '../../../components'

export const MissaoContainer = styled(Container)`
  padding-top: 60px;

  p {
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 1em;
    padding-right: 60px;
  }

  ul li {
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 18px;
    line-height: 30px;
  }

  @media only screen and (max-width: 787px) {
    p {
      font-size: 14px;
      line-height: 20px;
      padding-right: 0px;
    }

    ul li {
      font-size: 14px;
      line-height: 25px;
    }
  }
`

export const FotoEquipe = styled.div`
  padding-top: 20px;
`
