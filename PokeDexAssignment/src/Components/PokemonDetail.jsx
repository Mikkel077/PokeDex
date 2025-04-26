import {useQuery} from '@tanstack/react-query'
import axios from "axios";
import {useParams} from "react-router";

export default function PokemonDetail({onBack}) {

    const {name} = useParams()

    const fetchPokemon = async () => {
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        return response.data;
    };

    const {data: pokemon = [], error, isLoading} = useQuery(
        {
            queryFn: fetchPokemon,
            queryKey: {name},
        }
    )

    if (isLoading) return <div>Loading details…</div>

    return (
        <div className="space-y-4">
            <h2 className="text-2xl capitalize">{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={name} className="w-48"/>
            <ul className="grid grid-cols-2 gap-2">
                <li><strong>Types:</strong> {pokemon.types.map(t => t.type.name).join(', ')}</li>
                <li><strong>Height:</strong> {pokemon.height / 10} m</li>
                <li><strong>Weight:</strong> {pokemon.weight / 10} kg</li>
                <li><strong>Abilities:</strong> {pokemon.abilities.map(a => a.ability.name).join(', ')}</li>
            </ul>
            <h3 className="mt-4">Stats</h3>
            <ul>
                {pokemon.stats.map(s => (
                    <li key={s.stat.name}>{s.stat.name}: {s.base_stat}</li>
                ))}
            </ul>
        </div>
    )
}
