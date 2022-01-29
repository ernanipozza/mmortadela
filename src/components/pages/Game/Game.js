// recebe parâmetro da rota com useParams

import React from "react";
import { useParams } from "react-router-dom";

export const Game = () => {
  const { id } = useParams();
  return (
    <div>
      <p>GAME</p>
      <p>ID DO JOGO: {id}</p>
    </div>
  );
};