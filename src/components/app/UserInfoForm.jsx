import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const UserInfoForm = ({ phoneNumber, onNumberChange }) => {
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
    </form>
  );
};

export default UserInfoForm;

UserInfoForm.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  onNumberChange: PropTypes.func.isRequired,
};
