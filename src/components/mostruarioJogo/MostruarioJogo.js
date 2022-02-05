import React from "react";
import { TituloJogo, GeneroJogo, PlataformaJogo, DataLancamentoJogo, RequisitosJogo, RequisitoJogoSistemaOperacional, RequisitoJogoProcessador, RequisitoJogoMemoriaRam, RequisitoJogoPlacaGrafica, RequisitoJogoArmazenamento, ImagensJogo, ImagemExibida, ListaImagens, ImagensCarrossel, DescricaoJogo, Formulario, FormularioComentarioTitulo, DivNomeEmail, InputNome, InputEmail, DivComentarioBotao, InputComentario, BotaoComentario, ComentariosArea, ComentarioSalvo, ComentarioSalvoTexto, ComentarioSalvoVotos, AreaVotos, Upvote, Downvote, AreaContadorVotos } from '../../components/pages/jogo/Jogo.style'

export const MostruarioJogo = ({jogo}) => {
  if(jogo.length === 0){
    return <p>Sem Jogo A Ser Exibido No Momento.</p>
  }
  
  return jogo.map((jogo) => (
    <>
    <TituloJogo tituloJogo={jogo.title}/>
    <GeneroJogo generoJogo={jogo.genre}/>
    <PlataformaJogo plataformaJogo={jogo.plataform}/>
    <DataLancamentoJogo dataLancamentoJogo={jogo.release_date}/>
    <RequisitosJogo>
      <RequisitoJogoSistemaOperacional requisitosJogoSistemaOperacional={jogo.minimum_system_requirements.os}/>
      <RequisitoJogoProcessador requisitosJogoProcessador={jogo.minimum_system_requirements.processor}/>
      <RequisitoJogoMemoriaRam requisitosJogoMemoriaRam={jogo.minimum_system_requirements.memory}/>
      <RequisitoJogoPlacaGrafica requisitosJogoPlacaGrafica={jogo.minimum_system_requirements.graphics}/>
      <RequisitoJogoArmazenamento requisitosJogoArmazenamento={jogo.minimum_system_requirements.storage}/>
    </RequisitosJogo>
    <ImagensJogo>
      <ImagemExibida imagemExibida={jogo.screenshots[0].image}/>
      <ListaImagens>
        {/* <ImagensCarrossel imagensCarrossel={jogo.screenshots[i].image}/> */}
      </ListaImagens>
    </ImagensJogo>
    <DescricaoJogo descricaoJogo={jogo.description}/>


    </>
    ) 
  )
};