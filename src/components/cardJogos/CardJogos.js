import React from "react";
import { CardJogo, CardJogoImagem, CardJogoTitulo } from "./CardJogos.style";

export const CardJogos = () => {
  return (
    <CardJogo>
      <CardJogoImagem>IMAGEM JOGO</CardJogoImagem>
      <CardJogoTitulo>TÍTULO JOGO</CardJogoTitulo>
    </CardJogo>
  );
};
