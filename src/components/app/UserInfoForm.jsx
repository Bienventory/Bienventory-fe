import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useUser } from '../../hooks/LoginProvider';
import { createUser } from '../../services/fetchUtils';

const UserInfoForm = () => {
  const user = useUser();
  const [phoneNumber, setPhoneNumber] = useState('');

  const onNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    await createUser(user, phoneNumber);

    console.log('user here', user, phoneNumber);
  };

  return (
    <form>
      <TextField
        id="phoneNumber"
        label="Phone Number"
        placeholder="+15038060715"
        value={phoneNumber}
        margin="normal"
        onChange={onNumberChange}
      />
      <Button
        onClick={handleSubmit}
        style={{ display: 'block' }}
        variant="contained"
      >
        Submit
      </Button>
    </form>
  );
};

export default UserInfoForm;
