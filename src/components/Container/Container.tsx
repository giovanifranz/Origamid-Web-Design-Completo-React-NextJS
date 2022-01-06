import { useEffect, useState } from 'react'

interface ContainerProps {
  as: 'section' | 'div'
}

export function ContainerComponent({ as }: ContainerProps) {
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
