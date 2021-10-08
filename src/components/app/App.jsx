import React from 'react';
import IngredientForm from './ingredients/IngredientForm';
import Navigation from './Navigation';
export default function App() {
  return (
    <>
      <Navigation />
    Create a new ingredient
      <IngredientForm />
    </>
  );
}
