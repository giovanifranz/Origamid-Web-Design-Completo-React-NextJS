import Image from 'next/image'
import { FotoProps } from './types'

export function Foto({ type, width }: FotoProps) {
  return (
    <Image
      src={`/img/portfolio/${type.toLowerCase()}.jpg`}
      alt="Bicicleta Retro"
      width={width}
      height={280}
    />
  )
}
