/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
// import { Link } from '@mui/material';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { useUser } from '../../hooks/LoginProvider';

const apiUrl = 'https://bienventory.herokuapp.com/api/v1/inventory/';

// const rowsArray = dataArray.map((item) => {
//   return {
//     id: item.id,
//     col1: item.item_name,
//     col2: item.total_on_hand,
//     col3: item.unit_type,
//   };
// });

export default function Dashboard() {
  const user = useUser();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const dataArray = await fetch(`${apiUrl}`);
      const json = await dataArray.json();
      const userData = json.filter((item) => {
        return user.google_id === item.user_id;
      });
      setUserData(userData);
    };
    loadData();
  }, []);

  const rows = userData.map((item) => {
    return {
      id: item.id,
      col1: item.item_name,
      col2: item.total_on_hand,
      col3: item.unit_type,
    };
  });

  const columns = [
    {
      field: 'id',
      hide: true,
    },
    {
      field: 'col1',
      headerName: 'Item Name',
      renderCell: (params) => (
        <Link to={`/inventory/${params.row.id}`}>{params.value}</Link>
      ),
    },
    { field: 'col2', headerName: 'On Hand' },
    { field: 'col3', headerName: 'Units' },
  ];

  return (
    <Box sx={{ height: '90%', width: '100%' }}>
      <DataGrid sx={{ height: '100%', width: '100%' }} rows={rows} columns={columns} />
    </Box>
  );
}
