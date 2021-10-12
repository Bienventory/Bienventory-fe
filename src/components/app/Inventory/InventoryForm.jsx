import { Button, MenuItem, TextField } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
const handleChange = () => {};


const unitTypes = [
  {
    value: 'pounds',
    label: 'lb',
  },
  {
    value: 'ounces',
    label: 'oz',
  },
  {
    value: 'boxes',
    label: 'bx',
  },
  {
    value: 'unit',
    label: '¥',
  },
];


export default function InventoryForm({
  item_name,
  description,
  total_on_hand,
  unit_type,
  restock_level,
}) {
  return (
    <form>
      <TextField
        id="inventory-name"
        label="inventory Name"
        value={item_name}
        margin="normal"
        onChange={handleChange}
      />
      <TextField
        id="inventory-description"
        label="Description"
        value={description}
        margin="normal"
        onChange={handleChange}
      />
      <TextField
        type="number"
        id="qty-on-hand"
        label="Quantity On Hand"
        value={total_on_hand}
        margin="normal"
        onChange={handleChange}
      />

      <TextField
        id="unit-type"
        select
        label="Unit Type"
        value={unit_type}
        onChange={handleChange}
        helperText="Please select unit type"
      >
        {unitTypes.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id="restock-qty"
        label="Restock Level"
        value={restock_level}
        margin="normal"
        onChange={handleChange}
      />

      <Button style={{ display: 'block' }} variant="contained">
        Submit
      </Button>
    </form>
  );
}

InventoryForm.propTypes = {
  item_name: PropTypes.string.isRequired, 
  description: PropTypes.string.isRequired, 
  total_on_hand: PropTypes.number.isRequired, 
  unit_type: PropTypes.string.isRequired, 
  restock_level: PropTypes.number.isRequired, 
};
