import './App.css'
import {QueryClientProvider} from "@tanstack/react-query";
import {HashRouter, NavLink, Route, Routes} from "react-router";

function App() {
    const qc = new QueryClientProvider()


    return (
        <QueryClientProvider client={qc}>
            <HashRouter>
                <nav className="p-4 bg-gray-100 space-x-4">
                    <NavLink to="/" end className="hover:underline">Pokédex</NavLink>
                    <NavLink to="/about" className="hover:underline">About</NavLink>
                </nav>
                <main className="p-4">
                    <Routes>
                        <Route path="/" element={<Pokedex/>}/>
                        <Route path="/pokemon/:name" element={<Pokedex/>}/>
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </main>
            </HashRouter>
        </QueryClientProvider>
    )
}

export default App
