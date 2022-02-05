import React from "react";
import { CardJogos } from "../cardJogos/CardJogos";

export const MostruarioJogos = ({jogos}) => {
  if(jogos.length === 0){
    return <p>Sem Jogos A Serem Exibidos No Momento.</p>
  }
  
  return jogos.map((jogo) => (<CardJogos imagemJogo={jogo.thumbnail} tituloJogo={jogo.title} id={jogo.id}/>)) 
  ;
};