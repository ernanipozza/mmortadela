import styled from 'styled-components';

export const JogoArea = styled.main`
display: flex;
background: #d6a3fb;
border: 2px;
width: 100%-2px;
margin: 0;
padding: 3px;
`;

export const ResumoJogoArea = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
border: 2px;
border-right: 2px solid #abf62d;
width: 25%;
margin: 0;
padding: 3px;
`;

export const TituloJogo = styled.div`
border: 2px;
font-size: 35px;
font-weight: bold;
text-align: center;
height: 35%;
margin: 0;
padding: 10px;
`;

export const InfoGeraisJogo = styled.div`
border: 2px;
flex-grow: 1;
margin: 0;
padding: 3px;
`;

export const MostruarioJogoArea = styled.div`
display: flex;
border: 2px;
border-left: 2px solid #abf62d;
border-right: 2px solid #abf62d;
width: 45%;
margin: 0;
padding: 3px;
`;

export const ImagemDescricaoJogo = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
`;

export const ImagensJogo = styled.div`
display: flex;
`;

export const ImagemExibida = styled.div`
border: 2px solid #abf62d;
border-radius: 4px;
height: 450px;
width: 650px;
margin: 0;
padding: 3px;
`;

export const ListaImagens = styled.div`
display: flex;
flex-direction: column;
border: 2px solid #abf62d;
border-radius: 4px;
flex-grow: 1;
height: 450px;
margin: 0;
padding: 3px;
`;

export const ImagensCarrossel = styled.div`
border: 1px solid #abf62d;
border-radius: 2px;
flex-grow: 1;
margin: 0;
`;

export const DescricaoJogo = styled.div`
border: 2px;
flex-grow: 1;
`;

export const FormularioComentarioJogoArea = styled.div`
border: 2px;
border-left: 2px solid #abf62d;
width: 30%;
margin: 0;
padding: 3px;
`;

export const Formulario = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
border: 2px;
width: 100%-2px;
margin: 0;
padding: 3px;
height: 210px;
`;

export const FormularioComentarioTitulo = styled.div`
border: 2px;
width: 100%-2px;
height: 40px;
margin: 0;
padding: 3px;
text-align: center;
`;

export const DivNomeEmail = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
padding: 3px;
`;

export const InputNome = styled.input`
margin-right: 5px;
border: 1px solid black;
width: 40%;
`;

export const InputEmail = styled.input`
margin-right: 5px;
border: 1px solid black;
width: 40%;
`;

export const DivComentarioBotao = styled.div`
padding: 3px;
`;

export const InputComentario = styled.textarea`
width: 95%;
height: 100px;
padding: 2px;
margin: 3px 10px 3px 10px;
resize: none;
`;

export const BotaoComentario = styled.button`
margin: 3px 10px 3px 10px;
padding: 2px;
width: 96.5%;
`;

export const ComentariosArea = styled.div`
display: flex;
flex-direction: column;
border: 2px;
width: 100%-2px;
max-height: 497px;
margin: 0;
overflow: auto;
padding: 3px;
text-align: center;
`;

export const ComentarioSalvo = styled.div`
display: flex;
border: 2px;
width: 100%-2px;
height: 70px;
margin: 0;
padding: 3px;
word-break: break-word;
`;

export const ComentarioSalvoTexto = styled.div`
border: 2px;
width: 555px;
height: 60px;
margin: 0;
padding: 3px;
text-align: left;
`;

export const ComentarioSalvoVotos = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
border: 2px;
width: 100px;
height: 60px;
margin: 0;
padding: 3px;
`;

export const AreaVotos = styled.div`
display: flex;
justify-content: space-between;
`;

export const Upvote = styled.div`
`;

export const Downvote = styled.div`
`;

export const AreaContadorVotos = styled.div`
text-align: center;
`;
