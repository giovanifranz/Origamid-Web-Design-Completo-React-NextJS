import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Content = styled(motion.div)`
  width: 960px;
  margin: 0 auto;
  padding: 0px;
  position: relative;

  &:after,
  &:before {
    content: ' ';
    display: table;
  }

  &:after {
    clear: both;
  }
  @media only screen and (min-width: 788px) and (max-width: 979px) {
    width: 768px;
  }

  @media only screen and (max-width: 787px) {
    width: 300px;
  }
`
