import { ReactNode } from 'react'

export interface ButtonProps {
  hover: 'black' | 'white'
  children: ReactNode
  href: string
}
