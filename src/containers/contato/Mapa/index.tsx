import Image from "next/image";
import { MapaContainer } from "./styles";

export function Mapa() {
  return (
    <MapaContainer className="container">
      <a href="http://google.com" className="grid-16">
        <Image
          src="/img/endereco-bikcraft.jpg"
          alt="Endereço da Bikcraft"
          width={940}
          height={280}
        />
      </a>
    </MapaContainer>
  );
}
