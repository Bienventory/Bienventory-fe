import React from 'react';
import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { Modal } from '@mui/material';
import PlusButtonSmall from '../../Buttons/PlusButtonSmall';
import IngredientForm from './IngredientForm';

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

const handleChange = () => {};

export default function MenuItemForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <form>
      <TextField
        id="menu-item-name"
        label="Menu Item Name"
        //change value to controlled input
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

      {/* render map of array of added items from state */}
      <Box sx={{ display: 'flex', justifyContent: 'right' }}>
        <PlusButtonSmall onClick={handleOpen} />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <IngredientForm />
          </Box>
        </Modal>
      </Box>
      <Button style={{ display: 'block' }} variant="contained">
        Submit
      </Button>
    </form>
  );
}

MenuItemForm.propTypes = {};
