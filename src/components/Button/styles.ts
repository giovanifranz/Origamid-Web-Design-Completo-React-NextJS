import styled from 'styled-components'

export const StyledButton = styled.button`
  background: transparent;
  border: 3px solid var(--yellow);
  padding: 10px 30px;
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
