import React, { useState, useEffect } from "react";
import { Navbar } from "../../navbar";
import { JogosArea, CampoBuscaJogosArea, MostruarioJogosArea} from "./Jogos.style";
import { MostruarioJogos } from "../../mostruarioJogos"
import { CampoBusca } from "../../campoBusca";
import { getJogos } from "../../../API";

export const Jogos = ({ehTemaClaro, setEhTemaClaro}) => {

  const [buscaJogos, setBuscaJogos] = useState('');
  const handleBuscaJogos = value => {setBuscaJogos(value)};
  const [resultadoDaBuscaJogos, setResultadoDaBuscaJogos] = useState([]);
  const [resultadoDaBuscaJogosFiltrado, setResultadoDaBuscaJogosFiltrado] = useState([]);
  
  useEffect(()=> {
    getJogos().then(response => {
      setResultadoDaBuscaJogosFiltrado(response);
      setResultadoDaBuscaJogos(response);} 
  )}, [])

  const filtraJogos = (value) => {
    const jogosFiltrados = resultadoDaBuscaJogos.filter((jogo) => {
      return jogo.title.toLowerCase().includes(value.toLowerCase())
    })
    setResultadoDaBuscaJogosFiltrado(jogosFiltrados);
  }

  const limpaJogos = () => {
    setResultadoDaBuscaJogosFiltrado(resultadoDaBuscaJogos)
    setBuscaJogos('');
  }
   
  return (
    <>
    <Navbar ehTemaClaro={ehTemaClaro} setEhTemaClaro={setEhTemaClaro}/>
    <JogosArea>
      <CampoBuscaJogosArea>
        <CampoBusca valorBusca={buscaJogos} buscaJogos={filtraJogos} setValorBusca={handleBuscaJogos} limpaBusca={limpaJogos} />
      </CampoBuscaJogosArea>
      <MostruarioJogosArea>
        <MostruarioJogos jogos={resultadoDaBuscaJogosFiltrado}/>
      </MostruarioJogosArea>
    </JogosArea>
    </>
  );
};