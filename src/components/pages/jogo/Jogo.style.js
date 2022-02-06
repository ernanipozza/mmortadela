import styled from 'styled-components';

export const JogoArea = styled.main`
display: flex;
background: ${(props) => props.theme.roxo};
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
border-right: 2px solid ${(props) => props.theme.verde};
width: 25%;
margin: 0;
padding: 3px;
`;

export const TituloJogo = styled.div`
border: 2px solid ${(props) => props.theme.borda};
border-radius: 4px;
color: ${(props) => props.theme.letra};
font-size: 35px;
font-weight: bold;
text-align: center;
line-height: 180px;
height: 35%;
margin: 0;
padding: 10px;
`;

export const InfoGeraisJogo = styled.div`
color: ${(props) => props.theme.letra};
border: 2px;
flex-grow: 1;
margin: 0;
padding: 3px;
`;

export const MostruarioJogoArea = styled.div`
display: flex;
border: 2px;
border-left: 2px solid ${(props) => props.theme.verde};
border-right: 2px solid ${(props) => props.theme.verde};
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
border: 2px solid ${(props) => props.theme.verde};
border-radius: 4px;
height: 450px;
width: 650px;
margin: 0;
padding: 3px;
`;

export const ListaImagens = styled.div`
display: flex;
flex-direction: column;
border: 2px solid ${(props) => props.theme.verde};
border-radius: 4px;
flex-grow: 1;
height: 450px;
margin: 0;
padding: 3px;
`;

export const ImagensCarrossel = styled.div`
display: flex;
justify-content: center;
border: 1px solid ${(props) => props.theme.verde};;
border-radius: 2px;
flex-grow: 1;
margin: 1px;
`;

export const DescricaoJogo = styled.div`
padding: 10px;
border: 2px;
flex-grow: 1;
color: ${(props) => props.theme.letra};
`;

export const FormularioComentarioJogoArea = styled.div`
border: 2px;
border-left: 2px solid ${(props) => props.theme.verde};
width: 30%;
margin: 0;
padding: 3px;
`;

export const ComentariosAreaTitulo = styled.h2`
border: 2px;
color: ${(props) => props.theme.letra}; 
text-align: center;
width: 100%-2px;
margin: 0;
padding: 3px;
`;

export const ComentariosAreaSubtitulo = styled.h5`
border: 2px;
color: ${(props) => props.theme.letra}; 
text-align: center;
width: 100%-2px;
margin: 0;
padding: 3px;
`;


export const ComentariosArea = styled.div`
color: ${(props) => props.theme.letra}; 
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

export const NomeSalvo = styled.div`
display: flex;
border: 2px;
width: 100%-2px;
height: 10px;
margin: 0;
padding: 3px;
word-break: break-word;
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
