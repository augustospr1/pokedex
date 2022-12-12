import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Home } from "./Home";

export const PokemonPage = () => {
  return(
    <Container>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item md={4}>
          <h1>Charizard</h1>
          <h5>Tipo 01 | Tipo 02</h5>
        </Grid>
        <Grid item md={3}>
          <h1>Id: #01</h1>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={12}>
          <img src="https://pokemon-react-635a4.web.app/images/pokedex/26.png" alt="" />
        </Grid>
      </Grid>
    </Container>
  )
}