import React, { useEffect } from 'react';
import { loadCSS } from 'fg-loadcss';
import { green } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import PropTypes from 'prop-types';

export default function PlusButtonSmall({ onClick }) {
  useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.14.0/css/all.css',
      // Inject before JSS
      document.querySelector('#font-awesome-css') || document.head.firstChild
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <IconButton onClick={onClick}>
      <Icon
        variant="contained"
        baseClassName="fas"
        className="fa-plus-circle"
        sx={{ color: green[300], fontSize: 42 }}
      />
    </IconButton>
  );
}

PlusButtonSmall.propTypes = {
  onClick: PropTypes.func.isRequired,
};
