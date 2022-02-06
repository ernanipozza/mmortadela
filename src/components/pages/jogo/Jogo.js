import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from  "../../navbar"
import { JogoArea, ResumoJogoArea, MostruarioJogoArea, TituloJogo, InfoGeraisJogo, ImagemDescricaoJogo, ImagensJogo, ImagemExibida, ListaImagens, ImagensCarrossel, DescricaoJogo, FormularioComentarioJogoArea } from "./Jogo.style";
import { Formulario } from "./Formulario"

import { getJogo } from "../../../API";

export const Jogo = ({ehTemaClaro, setEhTemaClaro}) => {
  const { id } = useParams();
  const [detalhes, setDetalhes] = useState({});
  const [carregando, setCarregando]= useState(true);
  const numeroImagens = [0, 1, 2];
  const imagemAtual = useRef(null);
          
  useEffect(()=> {
    getJogo(id).then((response => {
      const jogoFiltro = response
      setDetalhes(jogoFiltro)
      setCarregando(false)
    }))
  },[])

  const trocaImagemPrincipal = (novoSrc) => {
    console.log(novoSrc)
    console.log(imagemAtual.current)
    imagemAtual.current.src = novoSrc;
  }

  if(carregando){
    return <p>Carregando</p>
  }

  return (
    <>
      <Navbar ehTemaClaro={ehTemaClaro} setEhTemaClaro={setEhTemaClaro}/>
      <JogoArea> 
        <ResumoJogoArea>
          <TituloJogo> <p>{detalhes.title}</p></TituloJogo>
          <InfoGeraisJogo>Gênero: <span>{detalhes.genre}</span><br/>
                          Plataforma: <span>{detalhes.platform}</span><br/>
                          Data de Lançamento: <span>{detalhes.release_date}</span><br/>
                          <p>Requisitos Mínimos: <br/>
                          <span>-Sistema Operacional: {detalhes.minimum_system_requirements.os}.</span><br/>
                          <span>-Processador: {detalhes.minimum_system_requirements.processor}.</span><br/>
                          <span>-RAM: {detalhes.minimum_system_requirements.memory}.</span><br/>
                          <span>-Placa de vídeo: {detalhes.minimum_system_requirements.graphics}.</span><br/>
                          <span>-Armazenamento: {detalhes.minimum_system_requirements.storage}.</span><br/>
                          </p>
          </InfoGeraisJogo>
        </ResumoJogoArea>
        <MostruarioJogoArea>
          <ImagemDescricaoJogo>
            <ImagensJogo>
              <ImagemExibida><img src={detalhes.screenshots[0].image} alt={detalhes.title} width="650px" height="450px" ref={imagemAtual}/></ImagemExibida>
              <ListaImagens>
                {numeroImagens.map((numeroImagem) => (
                  <ImagensCarrossel onClick={({target}) => trocaImagemPrincipal(target.src)}><img src={detalhes.screenshots[numeroImagem].image} alt={detalhes.title} width="170px" height="145px"/></ImagensCarrossel>
                ))}
              </ListaImagens>
            </ImagensJogo>
            <DescricaoJogo>{detalhes.short_description}</DescricaoJogo>
          </ImagemDescricaoJogo>
        </MostruarioJogoArea> 
        <FormularioComentarioJogoArea>
          <Formulario/>
        </FormularioComentarioJogoArea>
      </JogoArea>
    </>
  );
};
