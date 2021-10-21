import React, { useEffect } from 'react';
import { loadCSS } from 'fg-loadcss';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';

export default function PlusButton() {
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
    <IconButton>
      <Icon
        baseClassName="fas"
        className="fa-plus-circle"
        sx={{ color: green[500], fontSize: 66 }}
      />
    </IconButton>
  );
}
