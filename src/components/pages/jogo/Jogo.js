import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from  "../../navbar"
import ImgDownvote from "../../../assets/ImgDownvote.png";
import ImgUpvote from "../../../assets/ImgUpvote.png";
import { JogoArea, ResumoJogoArea, MostruarioJogoArea, TituloJogo, InfoGeraisJogo, ImagemDescricaoJogo, ImagensJogo, ImagemExibida, ListaImagens, ImagensCarrossel, DescricaoJogo, FormularioComentarioJogoArea, Formulario, FormularioComentarioTitulo, DivNomeEmail, InputNome, InputEmail, DivComentarioBotao, InputComentario, BotaoComentario, ComentariosArea, ComentarioSalvo, ComentarioSalvoTexto, ComentarioSalvoVotos, AreaVotos, Upvote, Downvote, AreaContadorVotos } from "./Jogo.style";
import { Formulario11 } from "./Formulario"

import { getJogo } from "../../../API";

export const Jogo = () => {
  const { id } = useParams();
  const [detalhes, setDetalhes] = useState({});
  const [carregando, setCarregando]= useState(true);
  
  useEffect(()=> {
    getJogo(id).then((response => {
      const jogoFiltro = response
      setDetalhes(jogoFiltro)
      setCarregando(false)
    }))

  },[])

  if(carregando){
    return <p>Carregando</p>
  }

  return (
    <>
      <Navbar/>
      <JogoArea> 
        <ResumoJogoArea>
          <TituloJogo> <p>{detalhes.title}</p></TituloJogo>
          <InfoGeraisJogo>Gênero: <span>{detalhes.genre}</span><br/>
                          Plataforma: <span>{detalhes.platform}</span><br/>
                          Data de Lançamento: <span>{detalhes.release_date}</span><br/>
                          Requisitos Mínimos: <br/>
                          <p>-{detalhes.minimum_system_requirements.os}</p>
                          <p>-{detalhes.minimum_system_requirements.processor}</p>
                          <p>-{detalhes.minimum_system_requirements.memory}</p>
                          <p>-{detalhes.minimum_system_requirements.graphics}</p>
                          <p>-{detalhes.minimum_system_requirements.storage}</p>
          </InfoGeraisJogo>
        </ResumoJogoArea>
        <MostruarioJogoArea>
          <ImagemDescricaoJogo>
            <ImagensJogo>
              <ImagemExibida><img src={detalhes.screenshots[0].image} alt={detalhes.title} width="650px" height="450px"/></ImagemExibida>
              <ListaImagens>
                <ImagensCarrossel><img src={detalhes.screenshots[0].image} alt={detalhes.title} width="166px" height="112px"/></ImagensCarrossel>
                <ImagensCarrossel><img src={detalhes.screenshots[1].image} alt={detalhes.title} width="166px" height="112px"/></ImagensCarrossel>
                <ImagensCarrossel><img src={detalhes.screenshots[2].image} alt={detalhes.title} width="166px" height="112px"/></ImagensCarrossel>
                {/* <ImagensCarrossel><img src={detalhes.screenshots[3].image} alt={detalhes.title} width="166px" height="112px"/></ImagensCarrossel> */}
              </ListaImagens>
            </ImagensJogo>
            <DescricaoJogo>{detalhes.short_description}</DescricaoJogo>
          </ImagemDescricaoJogo>
        </MostruarioJogoArea> 
        <FormularioComentarioJogoArea>
          <Formulario>
            <FormularioComentarioTitulo> DEIXE AQUI SEU COMENTÁRIO (máximo 100 caracteres)</FormularioComentarioTitulo>
            <DivNomeEmail>
              <InputNome placeholder="Informe seu nome"></InputNome>
              <InputEmail placeholder="email@mail.com"></InputEmail>
            </DivNomeEmail>
            <DivComentarioBotao>
              <InputComentario placeholder="Insira seu comentário"></InputComentario>
              <BotaoComentario>ENVIAR COMENTÁRIO</BotaoComentario>
            </DivComentarioBotao>
          </Formulario>
          <ComentariosArea>COMENTÁRIOS
            <ComentarioSalvo>
              <ComentarioSalvoTexto>100 CARACTERES 100 CARACTERES 100 CARACTERES 100 CARACTERES 100 CARACTERES 100 CARACTERES 0000000000</ComentarioSalvoTexto>
              <ComentarioSalvoVotos>
                <AreaVotos>
                  <Upvote><img src={ImgUpvote} width="35px" height="35px"></img></Upvote>
                  <Downvote><img src={ImgDownvote} width="35px" height="35px"></img></Downvote>
                </AreaVotos>
                <AreaContadorVotos> 50 </AreaContadorVotos>
              </ComentarioSalvoVotos>
            </ComentarioSalvo>
            <ComentarioSalvo>
              <ComentarioSalvoTexto>MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</ComentarioSalvoTexto>
              <ComentarioSalvoVotos>
                <AreaVotos>
                  <Upvote><img src={ImgUpvote} width="35px" height="35px"></img></Upvote>
                  <Downvote><img src={ImgDownvote} width="35px" height="35px"></img></Downvote>
                </AreaVotos>
                <AreaContadorVotos> 50 </AreaContadorVotos>
              </ComentarioSalvoVotos>
            </ComentarioSalvo>
          </ComentariosArea>
        </FormularioComentarioJogoArea>
      </JogoArea>
    </>
  );
};
