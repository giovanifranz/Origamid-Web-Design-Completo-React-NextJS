import Image from "next/image";

interface FotoProps {
  type: "Passeio" | "Esporte" | "Retro";
  width: 460 | 940;
}

export function Foto({ type, width }: FotoProps) {
  return (
      <Image
        src={`/img/portfolio/${type.toLowerCase()}.jpg`}
        alt="Bicicleta Retro"
        width={width}
        height={280}
      />
  );
}
