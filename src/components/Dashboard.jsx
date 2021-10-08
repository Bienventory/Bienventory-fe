import React from 'react';
import Box from '@mui/material/Box';
// import { Link } from '@mui/material';
import { Link } from 'react-router-dom';
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
    col2: item.total_on_hand,
    col3: item.unit_type,
  };
});

const rows = rowsArray;

const columns = [
  { field: 'id', hide: true },
  { field: 'col1',
    headerName: 'Item Name',
    renderCell: (params) => (
      <Link to={`/ingredient/${params.value}`}>{params.value}</Link>
    )
  },
  { field: 'col2', headerName: 'On Hand' },
  { field: 'col3', headerName: 'Units' },
];

export default function Dashboard() {
  return(
    <Box sx={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns}/>
    </Box>
  );
}
