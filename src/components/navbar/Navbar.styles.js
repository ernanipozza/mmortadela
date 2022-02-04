import styled from 'styled-components';
import { Link } from 'react-router-dom';

var verdeClaro = "#abf62d";
var verdeEscuro = "#5f9306";
var roxoClaro = "#d6a3fb";
var roxoEscuro = "#580693";
var fonteClaro = "black";
var fonteEscuro = "white";


export const Header = styled.header`
display: flex;
background: ${verdeClaro};
border: 2px;
width: 100%-2px;
height: 100px;
`;

export const BannerHeader = styled.div`
width: 60%;
background-color: ${verdeClaro};
`;

export const BotoesHeader = styled.div`
display: flex;
justify-content: space-evenly;
width: 40%;
`;

export const BotaoHeader = styled(Link)`
background: ${roxoClaro};
border: 2px;
border-radius: 3px;
width: 150px;
color: black;
font-size: 1.2rem;
margin: 1rem;
padding: 1rem 1.5rem;
text-align: center;
`;

export const BotaoTema = styled.button`
background: ${roxoEscuro};
border: 2px solid ${verdeEscuro};
color: ${fonteEscuro};
border-radius: 3px;
width: 60px;
font-size: 1rem;
margin: 1rem;
text-align: center;
`;