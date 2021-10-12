import React from 'react';
import { Button, TextField } from '@mui/material';
import PropTypes from 'prop-types';

const handleChange = () => {};

export default function MenuItemForm() {
  return (
    <form>
      <TextField
        id="menu-item-name"
        label="Menu Item Name"
        value="menu item"
        margin="normal"
        onChange={handleChange}
      />

      {/* <TextField
        type="number"
        id="qty-on-hand"
        label="Quantity On Hand"
        value={total_on_hand}
        margin="normal"
        onChange={handleChange}
      /> */}

      <Button style={{ display: 'block' }} variant="contained">
        Submit
      </Button>
    </form>
  );
}

MenuItemForm.propTypes = {};
