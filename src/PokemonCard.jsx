
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonCard = ({ name }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchPokemonImage = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      setImage(response.data.sprites.front_default);
    };
    fetchPokemonImage();
  }, [name]);

  return (
    <div className="pokemon-card">
      <h2>{name}</h2>
      {image && <img src={image} alt={name} />}
    </div>
  );
};

export default PokemonCard;
