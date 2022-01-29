// recebe parâmetro da rota com useParams

import React from "react";
import { useParams } from "react-router-dom";
import { Navbar } from  "../../navbar"
import { JogoArea, ResumoJogoArea, MostruarioJogoArea, TituloJogo, InfoGeraisJogo, ImagemDescricaoJogo, ImagensJogo, ImagemExibida, ListaImagens, ImagensCarrossel, DescricaoJogo, FormularioComentarioJogoArea, Formulario, DivNomeEmail, InputNome, InputEmail, DivComentarioBotao, InputComentario, BotaoComentario, ComentariosArea, ComentarioSalvo, ComentarioSalvoTexto, ComentarioSalvoVotos } from "./Jogo.style";

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
              <ImagemExibida>IMAGEM PRINCIPAL</ImagemExibida>
              <ListaImagens>
                <ImagensCarrossel>SLIDE 1</ImagensCarrossel>
                <ImagensCarrossel>SLIDE 2</ImagensCarrossel>
                <ImagensCarrossel>SLIDE 3</ImagensCarrossel>
                <ImagensCarrossel>SLIDE 4</ImagensCarrossel>
              </ListaImagens>
            </ImagensJogo>
            <DescricaoJogo>DESCRIÇÃO</DescricaoJogo>
          </ImagemDescricaoJogo>
          <FormularioComentarioJogoArea>
            <Formulario>
              <DivNomeEmail>
                <InputNome></InputNome>
                <InputEmail></InputEmail>
              </DivNomeEmail>
              <DivComentarioBotao>
                <InputComentario></InputComentario>
                <BotaoComentario>ENVIAR COMENTÁRIO</BotaoComentario>
              </DivComentarioBotao>
            </Formulario>
            <ComentariosArea>COMENTÁRIOS
              <ComentarioSalvo>
                <ComentarioSalvoTexto>COMENTÁRIO SALVO</ComentarioSalvoTexto>
                <ComentarioSalvoVotos>VOTOS</ComentarioSalvoVotos>
              </ComentarioSalvo>
            </ComentariosArea>
          </FormularioComentarioJogoArea>
        </MostruarioJogoArea>
      </JogoArea>
    </>
  );
};