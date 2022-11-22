import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import Grid from '@mui/material/Grid';
import axios from "axios";

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

  return (
    <div>
      <Navbar />

      <Container maxWidth="xl">
        <Grid container spacing={2} justifyContent="center">
          {pokemons.map((pokemon, key) => (
            <Grid item lg={2} md={3} sm={6} xs={12} key={key}>
              <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} />
            </Grid>
          ))}

        </Grid>
      </Container>

    </div>
  )
}