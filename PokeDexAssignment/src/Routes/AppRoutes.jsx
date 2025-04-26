import {Route, Router, Routes} from "react-router-dom";
import Pokedex from "../Pages/Pokedex.jsx";
import PokemonDetail from "../Components/PokemonDetail.jsx";
import About from "../Pages/About.jsx";

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Pokedex/>} />
                <Route path="/pokemon/:name" element={<PokemonDetail/>} />
                <Route path="About" element={<About/>} />
            </Routes>
        </>
    )
}