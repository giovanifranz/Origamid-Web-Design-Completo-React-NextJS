import NextLink from "next/link";

interface LinkProps {
  href: string;
}

export function Link({ href }: LinkProps) {
  return (
    <li>
      <NextLink href={`/${href}`}>
        <a>{href}</a>
      </NextLink>
    </li>
  );
}
