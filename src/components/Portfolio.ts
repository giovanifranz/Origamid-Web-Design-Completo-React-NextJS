import styled from 'styled-components'
import { motion } from 'framer-motion'
export const PortfolioComponent = styled(motion.section)`
  width: 100%;
  background: var(--black);
  padding: 40px 0;

  .subtitulo {
    color: var(--yellow);
  }

  .subtitulo:after {
    background: var(--yellow);
  }

  .portfolio_lista li:last-child {
    margin-top: 20px;
  }

  .call p {
    color: var(--white);
  }
`
