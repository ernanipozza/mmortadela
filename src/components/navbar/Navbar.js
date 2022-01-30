import React from 'react';
import imgJoguinho from "../../assets/joguinhos.jpg"
import { Header, BannerHeader, BotoesHeader, BotaoHeader } from "./Navbar.styles"

export const Navbar = () => {
    return (
        <Header>
            <BannerHeader>
                <img src={imgJoguinho}></img>
            </BannerHeader>
            <BotoesHeader>
                <BotaoHeader to="/">Notícias</BotaoHeader>
                <BotaoHeader to="/jogos">Jogos</BotaoHeader>
            </BotoesHeader>
        </Header>
    )
};