import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import Grid from '@mui/material/Grid';
import axios from "axios";
import { Skeletons } from "../components/Skeletons";

export const Home = () => {

  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons();
  }, []);

  // const [filteredPokemons, setFilteredPokemons] = useState(pokemons);

  // useEffect(() => {
  //   setFilteredPokemons(pokemons);
  // }, [pokemons])

  const [filter, setFilter] = useState("");

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 152; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res.map(r => r.data)));
  };

  const pokemonFilter = (name) => {
    // setFilteredPokemons(pokemons.filter(pokemon => pokemon.name.includes(name)))
    setFilter(name)
  }

  return (
    <div>
      <Navbar pokemonFilter={pokemonFilter} />

      <Container maxWidth="xl">
        <Grid container spacing={2} justifyContent="center">
          {pokemons.length === 0 ? (
            <Skeletons />
          ) : (
            pokemons.filter(pokemon => pokemon.name.includes(filter)).map((pokemon, key) => (
              <Grid item lg={2} md={3} sm={6} xs={12} key={key}>
                <Link to={`/detail/${pokemon.id}`}>
                  <PokemonCard name={pokemon.name} image={pokemon.sprites.front_default} types={pokemon.types}/>
                </Link>
              </Grid>
            ))
          )}
        </Grid>
      </Container>

    </div>
  )
}