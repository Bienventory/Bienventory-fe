import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IngredientForm from './ingredients/IngredientForm';
import Navigation from './Navigation';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navigation />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography>
          Create a new ingredient
        </Typography>
        <IngredientForm />
      </Box>
    </Box>
  );
}


