import React from 'react';
import imgJoguinho from "../../assets/joguinhos.jpg"
import { Header, BannerHeader, BotoesHeader, BotaoHeader, BotaoTema } from "./Navbar.styles"


export const Navbar = () => {
    return (
        <Header>
            <BannerHeader>
                <img src={imgJoguinho}/>
            </BannerHeader>
            <BotoesHeader>
                <BotaoHeader to="/">NOTÍCIAS</BotaoHeader>
                <BotaoHeader to="/jogos">JOGOS</BotaoHeader>
                <BotaoTema>Modo Escuro</BotaoTema>
            </BotoesHeader>
        </Header>
    )
};