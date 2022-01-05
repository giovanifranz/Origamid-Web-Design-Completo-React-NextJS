import { useEffect, useState } from 'react'
import styled from 'styled-components'

interface ContainerProps {
  as: 'section' | 'div'
}

function ContainerComponent({ as }: ContainerProps) {
  const [Component, setComponent] = useState(<section />)

  useEffect(() => {
    if (as === 'section') {
      setComponent(<section />)
    } else {
      setComponent(<div />)
    }
  }, [as])
  return Component
}

export const Container = styled(ContainerComponent)`
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
