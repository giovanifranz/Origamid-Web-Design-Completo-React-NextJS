import Image from 'next/image'
import { ListItem } from './styles'
interface SocialProps {
  type: 'Facebook' | 'Instagram' | 'Twitter'
}

export function Social({ type }: SocialProps) {
  return (
    <ListItem>
      <a href={`https://${type.toLowerCase()}.com/`}>
        <Image
          src={`/img/redes-sociais/${type.toLowerCase()}.svg`}
          width={32}
          height={32}
          alt={`${type} Bikcraft`}
        />
      </a>
    </ListItem>
  )
}
