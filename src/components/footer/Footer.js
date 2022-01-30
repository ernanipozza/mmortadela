import React from "react";
import { FooterGeral, Assinatura, DivLinksFooter, LinkFooter } from "./Footer.styles";
import imgLinkedin from "../../assets/linkedinIcon.png"
import imgGithub from "../../assets/githubIcon.png"

export const Footer = () => {
  return (
    <FooterGeral>
        <Assinatura>
          "MMortadela" é o projeto final do primeiro módulo do Curso DEVinHouse, parceria SENAI, ACATE e SOFTPLAN. <br/>
          Desenvolvido por Ernani Pozza.
        </Assinatura>
        <DivLinksFooter>
            <LinkFooter href="https://www.linkedin.com/in/ernani-pozza-a2111626/" target="_blank"><img src={imgLinkedin} width="60px" height="60px"></img></LinkFooter>
            <LinkFooter href="https://github.com/ernanipozza" target="_blank"><img src={imgGithub} width="60px" height="60px"></img></LinkFooter>
        </DivLinksFooter>
    </FooterGeral>
  );
};
