import React, { useState, useEffect } from "react";
import { Navbar } from "../../navbar";
import { NoticiasArea, CampoBuscaNoticiasArea, MostruarioNoticiasArea} from "./Noticias.styles"
import { MostruarioNoticias } from "../../mostruarioNoticias"
import { CampoBusca } from "../../campoBusca";
import { getNoticias } from "../../../API";

export const Noticias = ({ehTemaClaro, setEhTemaClaro}) => {
  const [buscaNoticias, setBuscaNoticias] = useState('');
  const handleBuscaNoticias = value => {setBuscaNoticias(value)};
  const [resultadoDaBuscaNoticias, setResultadoDaBuscaNoticias] = useState([]);
  const [resultadoDaBuscaNoticiasFiltrada, setResultadoDaBuscaNoticiasFiltrada] = useState([]);

  useEffect(()=> {
    getNoticias().then(response => {
      setResultadoDaBuscaNoticiasFiltrada(response);
      setResultadoDaBuscaNoticias(response);} 
  )}, [])

  const filtraNoticias = (value) => {
    const noticiasFiltradas = resultadoDaBuscaNoticias.filter((noticia) => {
      return noticia.title.toLowerCase().includes(value.toLowerCase())
    })
    setResultadoDaBuscaNoticiasFiltrada(noticiasFiltradas);
    console.log(noticiasFiltradas)
  }

  const limpaNoticias = () => {
    setResultadoDaBuscaNoticiasFiltrada(resultadoDaBuscaNoticias)
    setBuscaNoticias('');
  }

  return (
    <>
      <Navbar ehTemaClaro={ehTemaClaro} setEhTemaClaro={setEhTemaClaro}/>
      <NoticiasArea>
        <CampoBuscaNoticiasArea>
          <CampoBusca valorBusca={buscaNoticias} buscaJogos={filtraNoticias} setValorBusca={handleBuscaNoticias} limpaBusca={limpaNoticias}/>
        </CampoBuscaNoticiasArea>
        <MostruarioNoticiasArea>
          <MostruarioNoticias noticias={resultadoDaBuscaNoticiasFiltrada}/>
        </MostruarioNoticiasArea>
      </NoticiasArea>
    </>
  );
};