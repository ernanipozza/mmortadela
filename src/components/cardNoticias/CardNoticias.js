import React from "react";
import { CardNoticia, CardNoticiaImagem, CardNoticiaTitulo } from "./CardNoticias.style";

export const CardNoticias = ({imagemNoticia='', tituloNoticia='', linkNoticia=''}) => {
  return (
    <CardNoticia>
      <a href={linkNoticia} target="_blank">
        <CardNoticiaImagem><img src={imagemNoticia} alt={tituloNoticia} width="201px" height="155px"/></CardNoticiaImagem>
        <CardNoticiaTitulo><p>{tituloNoticia}</p></CardNoticiaTitulo>
      </a>
    </CardNoticia>
  );
};