import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import PropTypes from 'prop-types';

export default function IngredientForm({
  handleIngredientArrayChange,
  handleClose,
}) {
  const [ingredient, setIngredient] = useState('');
  const [quantity, setQuantity] = useState(0);
  const handleIngredientChange = ({ target }) => {
    setIngredient(target.value);
  };
  const handleQuantityChange = ({ target }) => {
    setQuantity(target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const ingredientObj = { name: ingredient, quantity };
    handleIngredientArrayChange(ingredientObj);
    handleClose();
  };
  return (
    <form>
      <TextField
        id="ingredient-name"
        label="Ingredient Name"
        //change to controlled input variable ingredient_name
        value={ingredient}
        margin="normal"
        onChange={handleIngredientChange}
      />

      <TextField
        id="qty_needed"
        label="Quantity needed per single serving"
        //change to controlled input variable qty_needed
        value={quantity}
        margin="normal"
        onChange={handleQuantityChange}
      />

      <Button
        onClick={handleSubmit}
        style={{ display: 'block' }}
        variant="contained"
      >
        Submit
      </Button>
    </form>
  );
}

IngredientForm.propTypes = {
  handleIngredientArrayChange: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};
