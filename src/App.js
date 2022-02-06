import { ThemeProvider } from "styled-components";
import { TemaClaro, TemaEscuro } from "./Tema";
import { useState } from "react";
import { Router } from "./Routes";
import { Footer } from "./components/footer";
import { Route, Routes } from "react-router-dom";
import { Jogos } from "./components/pages/jogos";
import { Noticias } from "./components/pages/noticias";
import { Jogo } from "./components/pages/jogo";

function App() {
  const [ehTemaClaro, setEhTemaClaro] = useState(true)
  return (
    <ThemeProvider theme={ehTemaClaro ? TemaEscuro : TemaClaro}>
      <Router>
        <Routes>
          <Route path="" element={<Noticias ehTemaClaro={ehTemaClaro} setEhTemaClaro={setEhTemaClaro}/>}/>
            <Route path="jogos">
              <Route index element={<Jogos ehTemaClaro={ehTemaClaro} setEhTemaClaro={setEhTemaClaro}/>}/>
              <Route path=":id" element={<Jogo ehTemaClaro={ehTemaClaro} setEhTemaClaro={setEhTemaClaro}/>}/>
            </Route>
          </Routes>
        <Footer/>
      </Router>
    </ThemeProvider>
  );
}

export default App;