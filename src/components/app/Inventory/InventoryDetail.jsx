import { Modal, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PlusButton from '../../Buttons/PlusButton';
import MinusButton from '../../Buttons/MinusButton';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import InventoryForm from './InventoryForm';
import { useParams } from 'react-router-dom';
import {
  deleteInventory,
  getInventoryById,
} from '../../../services/fetchUtils';
import { useHistory } from 'react-router-dom';

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
  const [inventoryData, setInventoryData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const loadData = async () => {
      const response = await getInventoryById(id);
      setInventoryData(response);
    };
    loadData();
  }, [inventoryData]);

  const { item_name, description, total_on_hand, unit_type, par } =
    inventoryData;

  const [open, setOpen] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const history = useHistory();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);
  const handleDelete = async () => {
    await deleteInventory(id);
    history.push('/');
  };

  return (
    <div>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={handleOpen}>Edit</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-edit"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <InventoryForm item={inventoryData} />
          </Box>
        </Modal>
        <Button onClick={handleOpenDelete}>Delete</Button>
        <Modal
          open={openDelete}
          onClose={handleCloseDelete}
          aria-labelledby="modal-modal-delete"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            Are you sure you want to permanently delete this item?
            <Button onClick={handleDelete}>Yes</Button>
            <Button onClick={handleCloseDelete}>No</Button>
          </Box>
        </Modal>
      </ButtonGroup>

      <Typography variant="h2">{item_name}</Typography>
      <Typography variant="h6">{description}</Typography>
      <Typography variant="h6">
        Restock at {par} {unit_type}
      </Typography>
      <Typography variant="h2" align="center">
        {total_on_hand} {unit_type}
      </Typography>
      {/* <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <MinusButton />
        <PlusButton />
      </Box> */}
    </div>
  );
}
