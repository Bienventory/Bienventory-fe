import { TextField } from '@mui/material';
import React from 'react';
import Papa from 'papaparse';
import { addSalesData } from '../../services/fetchUtils';
import { useUser } from '../../hooks/LoginProvider';

export default function UpdateInventoryForm() {
  const user = useUser();

  const handleChange = (event) => {
    event.preventDefault();

    const files = event.target.files;
    if (files) {
      Papa.parse(files[0], {
        delimiter: '',
        header: true,
        complete(results) {
          console.log('Finished:', results.data);

          addSalesData([results.data, user.phone_number]);
        },
      });
    }
  };

  return (
    <form>
      <TextField
        id="sales-data"
        label="Sales Data"
        type="file"
        accept=".csv"
        value=""
        margin="normal"
        onChange={handleChange}
      />
    </form>
  );
}
