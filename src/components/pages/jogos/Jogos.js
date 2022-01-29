import React from "react";
import { Navbar } from "../../navbar";
import { JogosArea, CampoBuscaJogosArea, MostruarioJogosArea} from "./Jogos.style";
import { MostruarioJogos } from "../../mostruarioJogos"
import { CampoBusca } from "../../campoBusca";

export const Jogos = () => {
  return (
    <>
    <Navbar/>
    <JogosArea>
      <CampoBuscaJogosArea>
        <CampoBusca></CampoBusca>
      </CampoBuscaJogosArea>
      <MostruarioJogosArea>
        <MostruarioJogos></MostruarioJogos>
        </MostruarioJogosArea>
    </JogosArea>
    </>
  );
};