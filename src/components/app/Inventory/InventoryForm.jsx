import { Button, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  createInventoryItem,
  updateInventory,
} from '../../../services/fetchUtils';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../../hooks/LoginProvider';
// const handleChange = () => {};

//pass in click handler for either get OR put route depending on parent
export default function InventoryForm(props) {
  const { id, item_name, description, total_on_hand, unit_type, par } =
    props.item;
  const [itemName, setItemName] = useState(item_name);
  const [itemDescription, setDescription] = useState(description);
  const [totalOnHand, setTotalOnHand] = useState(total_on_hand);
  const [unitType, setUnitType] = useState(unit_type);
  const [itemPar, setPar] = useState(par);
  const history = useHistory();
  const user = useUser();

  const handleChange = ({ target }) => {
    if (target.id === 'inventory-name') setItemName(target.value);
    if (target.id === 'description') setDescription(target.value);
    if (target.id === 'qty-on-hand') setTotalOnHand(target.value);
    if (target.name === 'unit-type') setUnitType(target.value);
    if (target.id === 'par') setPar(target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedInventory = {
      user_id: user.google_id,
      item_name: itemName,
      description: itemDescription,
      total_on_hand: totalOnHand,
      unit_type: unitType,
      par: itemPar,
    };
    if (id === 0) await createInventoryItem(updatedInventory);
    else await updateInventory(id, updatedInventory);
    history.push('/');
  };

  const unitTypes = ['count', 'lbs', 'gal'];

  return (
    <form>
      <TextField
        id="inventory-name"
        label="Item Name"
        value={itemName}
        margin="normal"
        onChange={handleChange}
      />
      <TextField
        id="description"
        label="Description"
        value={itemDescription}
        margin="normal"
        onChange={handleChange}
      />
      <TextField
        type="number"
        id="qty-on-hand"
        label="Quantity On Hand"
        value={totalOnHand}
        margin="normal"
        onChange={handleChange}
      />

      <TextField
        id="unit-type"
        label="Unit Type"
        name="unit-type"
        select
        margin="normal"
        value={unitType}
        onChange={handleChange}
      >
        {unitTypes.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id="par"
        label="Restock Level"
        value={itemPar}
        margin="normal"
        onChange={handleChange}
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

InventoryForm.defaultProps = {
  item: {
    id: 0,
    item_name: 'New Inventory Item',
    description: 'Description',
    total_on_hand: 0,
    unit_type: 'count',
    par: 0,
  },
};

InventoryForm.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    item_name: PropTypes.string,
    description: PropTypes.string,
    total_on_hand: PropTypes.number,
    unit_type: PropTypes.string,
    par: PropTypes.number,
  }),
};
