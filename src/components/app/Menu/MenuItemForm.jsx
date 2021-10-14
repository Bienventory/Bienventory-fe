import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { Modal } from '@mui/material';
import PlusButtonSmall from '../../Buttons/PlusButtonSmall';
import IngredientForm from './IngredientForm';
import { createMenuItem } from '../../../services/fetchUtils';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MenuItemForm() {
  const [menuItemName, setMenuItemName] = useState('');
  const [ingredientsArray, setIngredientsArray] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleMenuItemChange = ({ target }) => {
    setMenuItemName(target.value);
  };

  const handleIngredientArrayChange = (ingredientObj) => {
    const updatedArray = [...ingredientsArray, ingredientObj];
    setIngredientsArray(updatedArray);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newItem = {
      meal_name: menuItemName,
      ingredients: ingredientsArray,
    };
    await createMenuItem(newItem);
  };

  return (
    <form>
      <TextField
        id="menu-item-name"
        label="Menu Item Name"
        value={menuItemName}
        margin="normal"
        onChange={handleMenuItemChange}
      />
      <Box sx={{ display: 'flex', justifyContent: 'right' }}>
        <PlusButtonSmall onClick={handleOpen} />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <IngredientForm
              handleIngredientArrayChange={handleIngredientArrayChange}
              value={ingredientsArray}
            />
          </Box>
        </Modal>
      </Box>
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


