import Image from "next/image";
import { MissaoContainer } from "./styles";

export function Missao() {
  return (
    <MissaoContainer className="container fadeInDown" data-anime="1200">
      <div className="grid-10">
        <h2 className="subtitulo-interno">História, Missão e Visão</h2>
        <p>
          No mundo atual, a contínua expansão de nossa atividade cumpre um papel
          essencial na formulação da gestão inovadora da qual fazemos parte da
          qual fazemos parte.
        </p>
        <p>
          No mundo atual, a contínua expansão de nossa atividade cumpre um papel
          essencial na formulação da gestão inovadora da qual fazemos parte da
          qual fazemos parte.
        </p>
      </div>
      <div className="grid-6">
        <h2 className="subtitulo-interno">Valores</h2>
        <ul>
          <li>- Qualidade no processo com</li>
          <li>- Foco no cliente sem perder a</li>
          <li>- Diversão, preservando a</li>
          <li>- Natureza com sustentabilidade</li>
        </ul>
      </div>

      <div className="grid-16 foto-equipe">
        <Image
          src="/img/equipe-bikcraft.jpg"
          alt="Equipe Bikcraft"
          width={940}
          height={320}
        />
      </div>
    </MissaoContainer>
  );
}
