import React from "react";
import { CardNoticias } from "../cardNoticias/CardNoticias";

export const MostruarioNoticias = ({noticias}) => {
  if(noticias.length === 0){
    return <p>Sem Notícias A Serem Exibidas No Momento</p>
  }

  return noticias.map((noticia) => (<CardNoticias imagemNoticia={noticia.thumbnail} tituloNoticia={noticia.title} key={noticia.id} linkNoticia={noticia.article_url}/>));
};