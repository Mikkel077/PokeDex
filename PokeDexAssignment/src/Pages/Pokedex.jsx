import {useNavigate, useParams} from "react-router";
import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import PokemonCard from "../Components/PokemonCard.jsx";


export default function Pokedex() {
    const {name} = useParams()
    const [page, setPage] = useState(0)
    const navigate = useNavigate()

    const limit = 20;
    const offset = page * limit;

    const data = async () => {
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        );
        return response.data;
    };

    const {data: pokemons = [], error, isLoading} = useQuery(
        {
            queryFn: data,
            queryKey: ['pokemons', page],
        }
    )

    if (isLoading) return <div>Loading...</div>

    return (
        <div className="mt-6">
            <h1 className="">Pokédex</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {pokemons.results.map(pokemon => (
                    <PokemonCard key={pokemon.name} pokemon={pokemon} />
                ))}
            </div>
            <div>
                <button
                    onClick={() => setPage((old) => Math.max(old - 1, 0))}
                    disabled={page === 0}
                >
                    Previous
                </button>
                <span> Page {page + 1} </span>
                <button
                    onClick={() => {
                        if (pokemons.next) {
                            setPage((old) => old + 1);
                        }
                    }}
                    disabled={!pokemons.next}
                >
                    Next
                </button>
            </div>
        </div>
    )
}