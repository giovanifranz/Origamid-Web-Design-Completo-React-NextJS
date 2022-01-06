import { ReactNode } from 'react'

export interface AnchorProps {
  hover: 'black' | 'white'
  children: ReactNode
  href: string
}
