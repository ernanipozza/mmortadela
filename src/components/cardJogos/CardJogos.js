import React from "react";
import { CardJogo, CardJogoImagem, CardJogoTitulo } from "./CardJogos.style";

export const CardJogos = ({imagemJogo='', tituloJogo=''}) => {
  return (
    <CardJogo>
      <CardJogoImagem><img src={imagemJogo} alt={tituloJogo}/></CardJogoImagem>
      <CardJogoTitulo><p>{tituloJogo}</p></CardJogoTitulo>
    </CardJogo>
  );
};


// tamanho imagem: 205 x 155


