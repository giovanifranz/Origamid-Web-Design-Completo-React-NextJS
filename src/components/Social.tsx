import Image from 'next/image'

interface SocialProps {
  type: 'Facebook' | 'Instagram' | 'Twitter'
}

export function Social({ type }: SocialProps) {
  return (
    <li>
      <a href={`https://${type.toLowerCase()}.com/`}>
        <Image
          src={`/img/redes-sociais/${type.toLowerCase()}.svg`}
          width={32}
          height={32}
          alt={`${type} Bikcraft`}
        />
      </a>
    </li>
  )
}
