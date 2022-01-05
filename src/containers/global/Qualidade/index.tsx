import Image from "next/image";
import Link from "next/link";
import { Item } from "./Item";
import { QualidadeContainer } from "./styles";

export function Qualidade() {
  return (
    <QualidadeContainer className="container">
      <h2 className="subtitulo">Qualidade</h2>
      <Image
        src="/img/bikcraft-qualidade.svg"
        alt="Bikcraft"
        width={200}
        height={123}
      />
      <ul className="qualidade_lista">
        <Item title="Durabilidade" />
        <Item title="Design" />
        <Item title="Sustentabilidade" />
      </ul>
      <div className="call">
        <p>conheça mais a nossa história</p>
        <Link href="/Sobre">
          <a className="btn btn-preto">Sobre</a>
        </Link>
      </div>
    </QualidadeContainer>
  );
}
