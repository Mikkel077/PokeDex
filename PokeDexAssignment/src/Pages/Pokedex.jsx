import {useNavigate, useParams} from "react-router";
import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import Pagination from "../Components/Pagination.jsx";

const fetchPage = async (page) => {
    const limit = 20, offset = page * limit
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    return res.json()
}

export default function Pokedex() {
    const {name} = useParams()
    const [page, setPage] = useState(0)
    const navigate = useNavigate()

    const {data, isLoading} = useQuery(['list', page], () => fetchPage(page), {keepPreviousData: true})

    if (isLoading) return <div>Loading...</div>

    if (name) return <PokemonDetail name={name} onBack={() => navigate(-1)}/>

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {data.results.map(p => (
                    <PokemonCard
                        key={p.name}
                        name={p.name}
                        url={p.url}
                        onClick={() => navigate(`/pokemon/${p.name}`)}
                    />
                ))}
            </div>
            <Pagination
                page={page}
                onNext={() => setPage(p => p + 1)}
                onPrev={() => setPage(p => Math.max(0, p - 1))}
                disablePrev={page === 0}
                disableNext={!data.next}
            />
        </>
    )
}