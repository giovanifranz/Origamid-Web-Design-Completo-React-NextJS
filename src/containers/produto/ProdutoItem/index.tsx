import Image from "next/image";
import { PordutoItemContainer } from "./styles";

interface ProdutoItemProps {
  type: "esporte" | "passeio" | "retro";
}

export function ProdutoItem({ type }: ProdutoItemProps) {
  return (
    <PordutoItemContainer className="container ">
      <div className="grid-11">
        <Image
          src={`/img/produtos/bikcraft-${type}-1.jpg`}
          width={640}
          height={280}
          alt="Bikcraft Passeio"
        />
        <h2>{type}</h2>
      </div>
      <div className="grid-5 produto_icone">
        <Image
          src={`/img/produtos/${type}.svg`}
          alt={`Icone ${type}`}
          width={200}
          height={140}
        />
      </div>
      <div className="grid-8">
        <Image
          src={`/img/produtos/bikcraft-${type}-2.jpg`}
          alt="Bikcraft Passeio"
          width={460}
          height={280}
        />
      </div>
      <div className="grid-8 produto_info">
        <p>
          No mundo atual, a contínua expansão de nossa atividade cumpre um papel
          essencial na formula da gestão inovadora da qual fazemos parte
          inovadora da qual fazemos parte.
        </p>
        <ul>
          <li>Conforto</li>
          <li>Velocidade</li>
          <li>Design</li>
          <li>Versatilidade</li>
        </ul>
      </div>
    </PordutoItemContainer>
  );
}
