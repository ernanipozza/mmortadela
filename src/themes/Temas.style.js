import styled, { ThemeProvider } from 'styled-components';


export var temaEscuro = {
    "verdeEscuro" : "#5f9306",
    "roxoEscuro" : "#580693",
    "fonteEscuro" : "white",
}

export var temaClaro = {
    "verdeClaro" : "#5f9306",
    "roxoClaro" : "#d6a3fb",
    "fonteClaro": "black",
}

var verdeClaro = "#abf62d";
var verdeEscuro = "#5f9306";
var roxoClaro = "#d6a3fb";
var roxoEscuro = "#580693";
var fonteClaro = "black";
var fonteEscuro = "white";

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