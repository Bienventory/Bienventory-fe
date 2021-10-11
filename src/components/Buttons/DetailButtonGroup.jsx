import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function DetailButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      {/* <Button>Menu Items</Button> stretch goal*/}
      <Button>Edit</Button>
      <Button>Delete</Button>
    </ButtonGroup>
  );
}
