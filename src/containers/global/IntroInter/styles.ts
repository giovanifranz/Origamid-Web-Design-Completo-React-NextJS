import styled from 'styled-components'

export const IntroInternContainer = styled.section`
  background: ${(props) => props.theme.bg};
  background-size: cover;
  width: 100%;
  margin-top: 92px;
  height: 160px;
  text-align: center;
  color: var(--white);
  padding-top: 30px;

  h1 {
    font-size: 36px;
    font-weight: bold;
    text-transform: uppercase;
  }

  h1:after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: var(--white);
    margin: 6px auto 10px auto;
  }

  @media only screen and (max-width: 787px) {
    margin-top: 240px;
  }
`
