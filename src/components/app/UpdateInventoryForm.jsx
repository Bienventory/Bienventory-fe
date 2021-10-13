import { Button, TextField } from '@mui/material';
import React from 'react';

const handleChange = () => {};

export default function UpdateInventoryForm() {
  return (
    <form>
      <TextField
        id="sales-data"
        label="Sales Data"
        //change to controlled input variable ingredient_name
        value="CSV file"
        margin="normal"
        onChange={handleChange}
      />

      <Button style={{ display: 'block' }} variant="contained">
        Submit
      </Button>
    </form>
  );
}
