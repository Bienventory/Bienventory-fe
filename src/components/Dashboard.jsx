import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const dataArray = [
  {
    id: 1,
    item_name: 'potatoes',
    description: 'starch, staple',
    total_on_hand: 10,
    unit_type: 'lbs',
    restock_level: 2,
  },
  {
    id: 2,
    item_name: 'carrots',
    description: 'orange, staple',
    total_on_hand: 7,
    unit_type: 'lbs',
    restock_level: 2,
  },
  {
    id: 3,
    item_name: 'eggs',
    description: 'protein',
    total_on_hand: 24,
    unit_type: 'count',
    restock_level: 6,
  }
];

const rowsArray = dataArray.map((item) => {
  return {
    id: item.id,
    col1: item.item_name,
    col2: item.description,
    col3: item.total_on_hand,
    col4: item.unit_type,
    col5: item.restock_level,
  };
});

const rows = rowsArray;

const columns = [
  { field: 'id', hide: true },
  { field: 'col1', headerName: 'Item Name', width: 100 },
  { field: 'col2', headerName: 'Description', width: 100 },
  { field: 'col3', headerName: 'On Hand', width: 100 },
  { field: 'col4', headerName: 'Units', width: 100 },
  { field: 'col5', headerName: 'Restock', width: 100 },
];

export default function Dashboard() {
  return(
    <Box sx={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns}/>
    </Box>
  );
}
