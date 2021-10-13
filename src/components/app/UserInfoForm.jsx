import React from 'react';
import PropTypes from 'prop-types';

const UserInfoForm = ({ phoneNumber, onNumberChange }) => {
  return (
    <>
      <label htmlFor="phoneNumber">
        <input placeholder="+15038060715" type="text" value={phoneNumber} onChange={onNumberChange}/>
      </label>
    </>
  );
};

export default UserInfoForm;

UserInfoForm.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  onNumberChange: PropTypes.func.isRequired
};
