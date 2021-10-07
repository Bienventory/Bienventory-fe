import { Button, TextField } from '@mui/material';
import React from 'react';

const handleChange = () => {};

export default function IngredientForm() {

  return (
    <form>
      <TextField 
        id="ingredient-name"
        label="Ingredient Name"
        defaultValue="placeholder ingredient"
        margin="normal"
        onChange={handleChange}
      />
      <TextField
        id="ingredient-description"
        label="Description"
        defaultValue="asdf"
        margin="normal"
        onChange={handleChange}
      />
      <TextField
        type="number"
        id="qty-on-hand"
        label="Quantity On Hand"
        defaultValue="5"
        margin="normal"
        onChange={handleChange}
      />
      <TextField
        id="restock-qty"
        label="Restock Level"
        defaultValue="1"
        margin="normal"
        onChange={handleChange}
      />

      <Button style={{ display: 'block' }} variant="contained">Submit</Button>
    </form>
  );
}
