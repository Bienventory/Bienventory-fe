import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import Papa from 'papaparse';
import { addSalesData } from '../../services/fetchUtils';
import { useUser } from '../../hooks/LoginProvider';
import { useHistory } from 'react-router-dom';

export default function UpdateInventoryForm() {
  const [salesData, setSalesData] = useState([]);
  const user = useUser();
  const history = useHistory();

  const handleChange = (event) => {
    event.preventDefault();
    const files = event.target.files;
    if (files) {
      Papa.parse(files[0], {
        delimiter: '',
        dynamicTyping: true,
        header: true,
        complete(results) {
          console.log('Finished:', results.data);
          setSalesData(results.data, user.phone_number);
        },
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addSalesData(salesData);
    history.push('/');
  };

  return (
    <form>
      <TextField
        id="sales-data"
        helperText="Sales Data"
        type="file"
        accept=".csv"
        value=""
        margin="normal"
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}> Submit</Button>
    </form>
  );
}
