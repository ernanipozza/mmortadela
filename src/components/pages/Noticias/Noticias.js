import React from "react";
import { Navbar } from "../../navbar";
import { NoticiasArea, CampoBuscaNoticiasArea, MostruarioNoticiasArea} from "./Noticias.styles"
import { MostruarioNoticias } from "../../mostruarioNoticias"
import { CampoBusca } from "../../campoBusca";

export const Noticias = () => {
  return (
    <>
      <Navbar />
      <NoticiasArea>
        <CampoBuscaNoticiasArea>
          <CampoBusca></CampoBusca>          
        </CampoBuscaNoticiasArea>
        <MostruarioNoticiasArea>
          <MostruarioNoticias></MostruarioNoticias>
        </MostruarioNoticiasArea>
      </NoticiasArea>
    </>
  );
};