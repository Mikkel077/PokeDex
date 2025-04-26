// src/components/PokemonCard.jsx
import {Link} from 'react-router-dom';

export default function PokemonCard({pokemon}) {

    // in PokemonCard.jsx
    const id = pokemon.url.split('/').filter(Boolean).pop()
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

    return (
        <Link to={`/pokemon/${pokemon.name}`} target="_blank" rel="noopener noreferrer" className="block max-w-xs bg-white rounded overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200"
        >
            <div className="bg-gray-100 flex justify-center items-center h-40">
                <img
                    src={imageUrl}
                    alt={pokemon.name}
                    className="h-28 w-28 object-contain"
                />
            </div>
            <div className="p-4 text-center">
                <h2 className="text-lg font-semibold capitalize">
                    {pokemon.name}
                </h2>
            </div>
        </Link>
    );
}
