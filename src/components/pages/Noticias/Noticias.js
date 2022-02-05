import React, { useState, useEffect } from "react";
import { Navbar } from "../../navbar";
import { NoticiasArea, CampoBuscaNoticiasArea, MostruarioNoticiasArea} from "./Noticias.styles"
import { MostruarioNoticias } from "../../mostruarioNoticias"
import { CampoBusca } from "../../campoBusca";

import { getNoticias } from "../../../API";

export const Noticias = () => {
  const [buscaNoticias, setBuscaNoticias] = useState('');
  const handleBuscaNoticias = value => {setBuscaNoticias(value)};
  const limpaBuscaNoticias = () => setBuscaNoticias('');
  const [aguardaResultadoNoticia, setAguardarResultadoNoticia] = useState(false);
  const [resultadoDaBuscaNoticias, setResultadoDaBuscaNoticias] = useState([]);

  useEffect(()=> {
    getNoticias().then(response => setResultadoDaBuscaNoticias(response)).catch(error => console.log(error)).finally(() => setAguardarResultadoNoticia(false)
  )}, [])

  return (
    <>
      <Navbar />
      <NoticiasArea>
        <CampoBuscaNoticiasArea>
          <CampoBusca valorBusca={buscaNoticias} setValorBusca={handleBuscaNoticias} limpaBusca={limpaBuscaNoticias}/>
        </CampoBuscaNoticiasArea>
        <MostruarioNoticiasArea>
          <MostruarioNoticias noticias={resultadoDaBuscaNoticias}/>
        </MostruarioNoticiasArea>
      </NoticiasArea>
    </>
  );
};