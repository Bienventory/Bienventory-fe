import { TextField } from '@mui/material';
import React from 'react';
import Papa from 'papaparse';
import { addSalesData } from '../../services/fetchUtils';



const handleChange =  (event) => {
  event.preventDefault();
  
  const files = event.target.files;
  if (files) {
    Papa.parse(files[0], {
      delimiter: '',
      header: true,
      complete(results) {
        console.log('Finished:', results.data);

        addSalesData([
          results.data, 
          phoneNumber
        ]) ;

      },
    });
  }
};




export default function UpdateInventoryForm() {
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
