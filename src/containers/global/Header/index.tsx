import Image from 'next/image'
import NextLink from 'next/link'
import { Link } from './Link'
import { Content } from '../../../components'
import { HeaderContainer, HeaderMenu, Logo } from './Styles'

export function Header() {
  return (
    <HeaderContainer>
      <Content>
        <NextLink href="/">
          <a className="grid-4">
            <Logo>
              <Image
                src="/img/bikcraft.svg"
                alt="Bikcraft"
                width={100}
                height={62}
              />
            </Logo>
          </a>
        </NextLink>
        <HeaderMenu className="grid-12">
          <ul>
            <Link href="Sobre" />
            <Link href="Produtos" />
            <Link href="Portfolio" />
            <Link href="Contato" />
          </ul>
        </HeaderMenu>
      </Content>
    </HeaderContainer>
  )
}
