
import React, { useEffect, useState } from 'react';
import axios from 'axios';
 import PokemonCard from './PokemonCard';
 import SearchBar from './SearchBar';


const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
      setPokemonList(response.data.results);
    };
    fetchData();
  }, []);

  const filteredPokemons = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Pokémon List</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="pokemon-container">
        {filteredPokemons.map((pokemon, index) => (
          <PokemonCard key={index} name={pokemon.name} />
        ))}
      </div>
    </div>
  );
};

export default App;
