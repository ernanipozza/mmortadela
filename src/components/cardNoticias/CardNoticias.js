import React from "react";
import { CardNoticia, CardNoticiaImagem, CardNoticiaTitulo } from "./CardNoticias.style";

export const CardNoticias = () => {
  return (
    <CardNoticia>
      <CardNoticiaImagem>IMAGEM NOTÍCIA</CardNoticiaImagem>
      <CardNoticiaTitulo>TÍTULO NOTÍCIA</CardNoticiaTitulo>
    </CardNoticia>
  );
};


// tamanho imagem: 205 x 155