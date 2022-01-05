interface ItemProps {
  title: string
}

export function Item({ title }: ItemProps) {
  return (
    <li className="grid-1-3">
      <h3>{title}</h3>
      <p>
        Ainda assim, existem dúvidas a respeito de como a necessidade de
        renovação renovação renovação
      </p>
    </li>
  )
}
