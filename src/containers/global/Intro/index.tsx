import { IntroContainer } from './styles'
import { Blockquote, Content, Link } from '../../../components'
import { motion } from 'framer-motion'
import { introVariants, childVariantsTopDown } from '../../../styles'

export function Intro() {
  const MotionBlockquote = motion(Blockquote)
  const MotionLink = motion(Link)
  return (
    <IntroContainer>
      <Content variants={introVariants} initial="hidden" animate="visible">
        <motion.h1 variants={childVariantsTopDown}>
          Bicicletas Feitas a Mão
        </motion.h1>
        <MotionBlockquote variants={childVariantsTopDown}>
          <p>
            “não tenha nada em sua casa que você não considere útil ou acredita
            ser bonito”
          </p>
          <cite>WILLIAM MORRIS</cite>
        </MotionBlockquote>
        <motion.div variants={childVariantsTopDown}>
          <MotionLink href="/Produtos" hover="white">
            Orçamento
          </MotionLink>
        </motion.div>
      </Content>
    </IntroContainer>
  )
}
