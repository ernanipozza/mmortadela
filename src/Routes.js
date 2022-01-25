import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { Game } from './components/pages/Game';
import { Noticias } from './components/pages/Noticias';
import { Card } from './components/Card/Card';



export const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/" element={<Game/>}/>
            <Route path="/" element={<Noticias/>}/>
            <Route path="/" element={<Card/>}/>
        </Routes>
    </BrowserRouter>
)