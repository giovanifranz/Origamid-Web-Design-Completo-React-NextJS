import Image from 'next/image'
import NextLink from 'next/link'
import { Link } from './Link'
import { HeaderContainer } from './Styles'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <NextLink href="/">
          <a className="grid-4">
            <Image
              src="/img/bikcraft.svg"
              alt="Bikcraft"
              width={100}
              height={62}
            />
          </a>
        </NextLink>
        <nav className="grid-12 header_menu">
          <ul>
            <Link href="Sobre" />
            <Link href="Produtos" />
            <Link href="Portfolio" />
            <Link href="Contato" />
          </ul>
        </nav>
      </div>
    </HeaderContainer>
  )
}
