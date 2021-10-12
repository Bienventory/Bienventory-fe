import { Button, MenuItem, TextField } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const handleChange = () => {};

//pass in click handler for either get OR put route depending on parent
export default function InventoryForm(props) {
  const unitTypes = ['count', 'lbs', 'gal'];

  const { item_name, description, total_on_hand, unit_type, restock_level } =
    props.item;

  return (
    <form>
      <TextField
        id="inventory-name"
        label="Item Name"
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
        margin="normal"
        onChange={handleChange}
        helperText="Please select unit type"
      >
        {unitTypes.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
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

InventoryForm.defaultProps = {
  item: {
    item_name: 'New Inventory Item',
    description: 'Description',
    total_on_hand: 0,
    unit_type: 'count',
    restock_level: 0,
  },
};

InventoryForm.propTypes = {
  item: PropTypes.shape({
    item_name: PropTypes.string,
    description: PropTypes.string,
    total_on_hand: PropTypes.number,
    unit_type: PropTypes.string,
    restock_level: PropTypes.number,
  }),
};
