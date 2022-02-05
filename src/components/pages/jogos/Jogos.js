import React, { useState, useEffect } from "react";
import { Navbar } from "../../navbar";
import { JogosArea, CampoBuscaJogosArea, MostruarioJogosArea} from "./Jogos.style";
import { MostruarioJogos } from "../../mostruarioJogos"
import { CampoBusca } from "../../campoBusca";

import { getJogos } from "../../../API";

export const Jogos = () => {

  const [buscaJogos, setBuscaJogos] = useState('');
  const handleBuscaJogos = value => {setBuscaJogos(value)};
  const limpaBuscaJogos = () => setBuscaJogos('');
  const [aguardaResultado, setAguardarResultado] = useState(false);
  const [resultadoDaBuscaJogos, setResultadoDaBuscaJogos] = useState([]);
  
  useEffect(()=> {
    getJogos().then(response => setResultadoDaBuscaJogos(response)).catch(error => console.log(error)).finally(() => setAguardarResultado(false)
  )}, [])
 
  return (
    <>
    <Navbar/>
    <JogosArea>
      <CampoBuscaJogosArea>
        <CampoBusca valorBusca={buscaJogos} setValorBusca={handleBuscaJogos} limpaBusca={limpaBuscaJogos} />
      </CampoBuscaJogosArea>
      <MostruarioJogosArea>
        <MostruarioJogos jogos={resultadoDaBuscaJogos}/>
      </MostruarioJogosArea>
    </JogosArea>
    </>
  );
};