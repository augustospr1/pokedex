import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { PokemonPage } from '../../pages/PokemonPage';

export default function PokemonCard({ name, image, types }) {
  
  const typeHandler = () => {
    if(types[1]){
      return types[0].type.name + " | " + types[1].type.name;
    }
    return types[0].type.name;
  }
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          width="100%"
          image={ image }
          alt="green iguana"
        />
        <CardContent>
          <Box justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="caption" component="div">
              {typeHandler()}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}