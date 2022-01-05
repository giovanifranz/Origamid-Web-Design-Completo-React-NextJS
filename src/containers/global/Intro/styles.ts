import styled from "styled-components";

export const IntroContainer = styled.section`
  width: 100%;
  height: 380px;
  background: url("/img/bg.jpg") no-repeat center;
  background-size: cover;
  margin-top: 92px;
  text-align: center;
  padding-top: 80px;

  h1 {
    font-size: 48px;
    color: var(--white);
    font-weight: bold;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 787px) {
    margin-top: 0px;
    padding-top: 40px;
    background: url("../img/bg-mobile.jpg") no-repeat center;
    background-size: cover;

    h1 {
      font-size: 36px;
    }
  }
`;
