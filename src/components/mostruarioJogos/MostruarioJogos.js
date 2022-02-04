//adicionar chamada para API buscar jogos (useEffect)
//consumir contexto de busca para filtrar


import React from "react";
import { CardJogos } from "../cardJogos/CardJogos";

export const MostruarioJogos = ({jogos}) => {
  if(jogos.length === 0){
    return <p>Sem Jogos Encontrados</p>
  }
  
  return jogos.map((jogo) => (<CardJogos imagemJogo={jogo.thumbnail} tituloJogo={jogo.title} key={jogo.id}/>)) 
  ;
};