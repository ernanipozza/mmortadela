import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from  "../../navbar"
import ImgDownvote from "../../../assets/ImgDownvote.png";
import ImgUpvote from "../../../assets/ImgUpvote.png";
import { JogoArea, ResumoJogoArea, MostruarioJogoArea, TituloJogo, InfoGeraisJogo, ImagemDescricaoJogo, ImagensJogo, ImagemExibida, ListaImagens, ImagensCarrossel, DescricaoJogo, FormularioComentarioJogoArea, Formulario, FormularioComentarioTitulo, DivNomeEmail, InputNome, InputEmail, DivComentarioBotao, InputComentario, BotaoComentario, ComentariosArea, ComentarioSalvo, ComentarioSalvoTexto, ComentarioSalvoVotos, AreaVotos, Upvote, Downvote, AreaContadorVotos } from "./Jogo.style";
import { Formulario11 } from "./Formulario"

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
