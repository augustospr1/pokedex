import { Skeleton } from "@mui/material";
import React from "react";
import { Container } from "@mui/system";
import Grid from '@mui/material/Grid';

export const Skeletons = () => {
  return (
    <Container maxWidth="xl">
      <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBottom:"1em" }} />
      <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBottom:"1em" }} />
      <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBottom:"1em" }} />
      <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBottom:"1em" }} />
      <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBottom:"1em" }} />
      <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBottom:"1em" }} />
    </Container>
  );
};