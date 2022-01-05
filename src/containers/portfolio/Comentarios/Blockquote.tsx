import { BlockquoteComponent } from "./styles";

interface BlockquoteProps {
  text: string;
  author: string;
}

export function Blockquote({ text, author }: BlockquoteProps) {
  return (
    <BlockquoteComponent>
      <p>“{text}”</p>
      <cite>{author}</cite>
    </BlockquoteComponent>
  );
}
