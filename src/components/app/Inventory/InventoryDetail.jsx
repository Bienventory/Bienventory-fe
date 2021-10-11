import { Typography } from '@mui/material';
import React from 'react';
import Icon from '@mui/material/Icon';
import PlusButton from '../../Buttons/PlusButton';
import MinusButton from '../../Buttons/MinusButton';
import { Box } from '@mui/system';
import DetailButtonGroup from '../../Buttons/DetailButtonGroup';
// import { useParams } from 'react-router-dom';

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

  const { item_name, description, total_on_hand, unit_type, restock_level } =
    inventoryDetail;

  return (
    <div>
      <DetailButtonGroup sx={{ display: 'flex', justifySelf: 'center' }} />
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
