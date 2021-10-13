import React from 'react';
import { Button, TextField } from '@mui/material';

const handleChange = () => {};

export default function IngredientForm() {
  return (
    <form>
      <TextField
        id="ingredient-name"
        label="Ingredient Name"
        //change to controlled input variable ingredient_name
        value="ingredient"
        margin="normal"
        onChange={handleChange}
      />

      <TextField
        id="qty_needed"
        label="Quantity needed per single serving"
        //change to controlled input variable qty_needed
        value="number"
        margin="normal"
        onChange={handleChange}
      />

      <Button style={{ display: 'block' }} variant="contained">
        Submit
      </Button>
    </form>
  );
}
