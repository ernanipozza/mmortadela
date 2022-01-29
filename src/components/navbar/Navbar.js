import React from 'react';
import imgJoguinho from "../../assets/joguinhos.jpg"
import { HeaderNoticias, BannerHeader, BotoesHeader, BotaoHeader } from "./Navbar.styles"

export const Navbar = () => {
    return (
        <HeaderNoticias>
            <BannerHeader>
                <img src={imgJoguinho}></img>
            </BannerHeader>
            <BotoesHeader>
                <BotaoHeader>Notícias</BotaoHeader>
                <BotaoHeader>Jogos</BotaoHeader>
            </BotoesHeader>
        </HeaderNoticias>
    )
};