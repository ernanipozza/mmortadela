//adicionar provider de busca


import { Router } from "./Routes";
import { Footer } from "./components/footer";
import { Route, Routes } from "react-router-dom";
import { Jogos } from "./components/pages/jogos";
import { Noticias } from "./components/pages/noticias";
import { Game } from "./components/pages/game";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Noticias/>}/>
        <Route path="jogos">
          <Route index element={<Jogos/>}/>
          <Route path=":id" element={<Game/>}/>
        </Route>
      </Routes>
      <Footer/>
    </Router>
  );
}



export default App;