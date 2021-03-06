import styled from 'styled-components'
import { Form } from 'formik'

export const FormularioComponent = styled(Form)`
  padding-right: 60px;

  label {
    display: block;
    color: ${(props) => props.theme.color};
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 4px;
  }

  input {
    display: block;
    width: 100%;
    border: 4px solid var(--yellow);
    background: none;
    color: ${(props) => props.theme.color};
    padding: 7px 10px;
    margin-bottom: 10px;
    outline: none;
    font-size: 14px;
    font-family: Georgia, 'Times New Roman', serif;
  }

  textarea {
    display: block;
    width: 100%;
    height: 120px;
    border: 4px solid var(--yellow);
    background: none;
    color: ${(props) => props.theme.color};
    padding: 7px 10px;
    margin-bottom: 20px;
    outline: none;
    font-size: 14px;
    font-family: Georgia, 'Times New Roman', serif;
  }

  @media only screen and (max-width: 787px) {
    padding-right: 0px;
    margin-bottom: 40px;
  }
`

export const Button = styled.button`
  padding: 7px 40px;
  background: none;
  border: 3px solid var(--yellow);
  color: var(--yellow);
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.1em;

  &:hover {
    color: ${(props) => props.theme.color};
    border-color: ${(props) => props.theme.color};
  }
`
