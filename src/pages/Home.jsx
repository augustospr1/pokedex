import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import Grid from '@mui/material/Grid';
import axios from "axios";
import { Skeletons } from "../components/Skeletons";
import { PokemonPage } from "./PokemonPage";

export const Home = () => {

  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 152; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
  };

  const pokemonFilter = (name) => {
    var filteredPokemons = [];
    if(name===""){
      getPokemons();
    }
    for (var i in pokemons) {
      if(pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }
    setPokemons(filteredPokemons);
  }

  return (
    <div>
      <Navbar pokemonFilter={pokemonFilter} />

      <Container maxWidth="xl">
        <Grid container spacing={2} justifyContent="center">
          {pokemons.length === 0 ? (
            <Skeletons />
          ) : (
            pokemons.map((pokemon, key) => (
              <Grid item lg={2} md={3} sm={6} xs={12} key={key}>
                <Link to={`/detail/${pokemon.data.id}`}>
                  <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types}/>
                </Link>
              </Grid>
            ))
          )}
        </Grid>
      </Container>

    </div>
  )
}