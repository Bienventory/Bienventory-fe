import { Modal, Typography } from '@mui/material';
import React from 'react';
import PlusButton from '../../Buttons/PlusButton';
import MinusButton from '../../Buttons/MinusButton';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom';
import InventoryForm from './InventoryForm';
// import { useParams } from 'react-router-dom';

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

export default function InventoryDetail() {
  // const { id } = useParams();
  // const inventoryDetail = getById(id);

  const inventoryDetail = {
    id: 1,
    item_name: 'potatoes',
    description: 'starch, staple',
    total_on_hand: 10,
    unit_type: 'lbs',
    restock_level: 2,
  };

  const {
    id,
    item_name,
    description,
    total_on_hand,
    unit_type,
    restock_level,
  } = inventoryDetail;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Link
        to={
          ({ pathname: `/inventory/${id}` },
          { releasesProps: { item: inventoryDetail } })
        }
      >
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={handleOpen}>Edit</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <InventoryForm />
            </Box>
          </Modal>
          <Button>Delete</Button>
        </ButtonGroup>
      </Link>

      <Typography variant="h2">{item_name}</Typography>
      <Typography variant="h6">{description}</Typography>
      <Typography variant="h6">
        Restock at {restock_level} {unit_type}
      </Typography>
      <Typography variant="h2" align="center">
        {total_on_hand} {unit_type}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <MinusButton />
        <PlusButton />
      </Box>
    </div>
  );
}
