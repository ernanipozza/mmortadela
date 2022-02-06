import React from 'react';
import imgJoguinho from "../../assets/joguinhos.jpg";
import { Header, BannerHeader, BotoesHeader, BotaoHeader, BotaoTema } from "./Navbar.styles";

export const Navbar = ({ehTemaClaro, setEhTemaClaro}) => {

    console.log(ehTemaClaro)
    
    return (
        <Header>
            <p>{ehTemaClaro}</p>
            <BannerHeader>
                <img src={imgJoguinho} alt="joguinho"/>
            </BannerHeader>
            <BotoesHeader>
                <BotaoHeader to="/">NOTÍCIAS</BotaoHeader>
                <BotaoHeader to="/jogos">JOGOS</BotaoHeader>
                <BotaoTema onClick={() => setEhTemaClaro((valor) => !valor)}>
                    {ehTemaClaro ? "Tema Escuro" : "Tema Claro"}
                </BotaoTema>
            </BotoesHeader>
        </Header>
    )
};