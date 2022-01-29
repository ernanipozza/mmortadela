import React from "react";
import { FooterNoticias, AssinaturaNoticias, DivBotoesFooter, BotoesFooter } from "./Footer.styles";

export const Footer = () => {
  return (
    <FooterNoticias>
        <AssinaturaNoticias>Projetin Devin Housin</AssinaturaNoticias>
        <DivBotoesFooter>
            <BotoesFooter>Linque Edinho</BotoesFooter>
            <BotoesFooter>GitHub</BotoesFooter>
        </DivBotoesFooter>
    </FooterNoticias>
  );
};
