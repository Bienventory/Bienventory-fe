import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, Switch } from '@mui/material';

const UserInfoForm = ({ phoneNumber, onNumberChange }) => {
  return (
    <form>
      <Switch checked={checked}
 />
      <TextField
        id="phoneNumber"
        label="Phone Number"
        placeholder="+15038060715"
        value={phoneNumber}
        margin="normal"
        onChange={onNumberChange}
      />
      <Button style={{ display: 'block' }} variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default UserInfoForm;

UserInfoForm.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  onNumberChange: PropTypes.func.isRequired,
};

UserInfoForm.defaultProps = {
  phoneNumber: '',
  onNumberChange: () => {}
};
