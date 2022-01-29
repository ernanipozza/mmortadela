//utilizar valores do contexto para popular busca

import React from "react";
import { InputBuscaArea, InputBusca, BotoesArea, BotaoBusca, BotaoLimpar } from "./CampoBusca.styles";

export const CampoBusca = () => {
  return (
    <>
    <InputBuscaArea>
      <InputBusca></InputBusca>
    </InputBuscaArea>
    <BotoesArea>
      <BotaoBusca>Pesquisar</BotaoBusca>
      <BotaoLimpar>Limpar</BotaoLimpar>
    </BotoesArea>
    </>
  );
};
