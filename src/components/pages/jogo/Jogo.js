// recebe parâmetro da rota com useParams

import React from "react";
import { useParams } from "react-router-dom";
import { Navbar } from  "../../navbar"
import ImgDownvote from "../../../assets/ImgDownvote.png";
import ImgUpvote from "../../../assets/ImgUpvote.png";
import { JogoArea, ResumoJogoArea, MostruarioJogoArea, TituloJogo, InfoGeraisJogo, ImagemDescricaoJogo, ImagensJogo, ImagemExibida, ListaImagens, ImagensCarrossel, DescricaoJogo, FormularioComentarioJogoArea, Formulario, FormularioComentarioTitulo, DivNomeEmail, InputNome, InputEmail, DivComentarioBotao, InputComentario, BotaoComentario, ComentariosArea, ComentarioSalvo, ComentarioSalvoTexto, ComentarioSalvoVotos, AreaVotos, Upvote, Downvote, AreaContadorVotos } from "./Jogo.style";
import { Formulario11 } from "./Formulario"


export const Jogo = () => {
  const { id } = useParams();
  return (
    <>
      <Navbar/>
      <JogoArea> 
        <ResumoJogoArea>
          <TituloJogo> ID DO JOGO: {id} </TituloJogo>
          <InfoGeraisJogo>Gênero: <br/>
                          Plataforma: <br/>
                          Data de Lançamento: <br/>
                          Requisitos Mínimos: <br/>
          </InfoGeraisJogo>
        </ResumoJogoArea>
        <MostruarioJogoArea>
          <ImagemDescricaoJogo>
            <ImagensJogo>
              <ImagemExibida>IMAGEM EXIBIDA</ImagemExibida>
              <ListaImagens>
                <ImagensCarrossel>SLIDE 1</ImagensCarrossel>
                <ImagensCarrossel>SLIDE 2</ImagensCarrossel>
                <ImagensCarrossel>SLIDE 3</ImagensCarrossel>
                <ImagensCarrossel>SLIDE 4</ImagensCarrossel>
              </ListaImagens>
            </ImagensJogo>
            <DescricaoJogo>DESCRIÇÃO</DescricaoJogo>
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


