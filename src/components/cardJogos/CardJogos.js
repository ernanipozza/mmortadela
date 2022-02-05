import React from "react";
import { CardJogo, CardJogoImagem, CardJogoTitulo } from "./CardJogos.style";
import { Link } from 'react-router-dom';

export const CardJogos = ({imagemJogo='', tituloJogo='', id=''}) => {
  return (
    <CardJogo>
      <Link to={`/jogos/${id}`} target="_blank">
        <CardJogoImagem><img src={imagemJogo} alt={tituloJogo} width="201px" height="155px"/></CardJogoImagem>
        <CardJogoTitulo><p>{tituloJogo}</p></CardJogoTitulo>
      </Link>
    </CardJogo>
  );
};
