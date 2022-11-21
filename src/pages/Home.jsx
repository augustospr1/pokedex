import { Container } from "@mui/system";
import React from "react";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import Grid from '@mui/material/Grid';
import axios from "axios";

export const Home = () => {
  axios.get("https://pokeapi.co/api/v2/pokemon?limit=50")
  return (
    <div>
      <Navbar />

      <Container maxWidth="xl">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={3}>
            <PokemonCard />
          </Grid>
          <Grid item xs={12} md={3}>
            <PokemonCard />
          </Grid>
          <Grid item xs={12} md={3}>
            <PokemonCard />
          </Grid>
        </Grid>
      </Container>

    </div>
  )
}