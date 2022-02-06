import React from "react";
import { AreaCampoBusca, Titulo, InputBuscaArea, InputBusca, BotoesArea, BotaoBusca, BotaoLimpar} from "./CampoBusca.styles";

export const CampoBusca = ({valorBusca = '', setValorBusca, limpaBusca, buscaJogos}) => {
  return (
    <>
    <AreaCampoBusca>
      <Titulo>Busque pelo seu jogo predileto!</Titulo>
      <InputBuscaArea>
        <InputBusca value={valorBusca} onChange={event => setValorBusca(event.target.value)}/>
      </InputBuscaArea>
      <BotoesArea>
        <BotaoBusca onClick={() => buscaJogos(valorBusca)}>Pesquisar</BotaoBusca>
        <BotaoLimpar onClick={() => limpaBusca()}>Limpar</BotaoLimpar>
      </BotoesArea>
    </AreaCampoBusca>
    </>
  );
};