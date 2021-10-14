import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { uselogOutUser } from '../../hooks/LoginProvider';
import { useGoogleLogout } from 'react-google-login';

const drawerWidth = 240;

function Navigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const logOutUser = uselogOutUser();
  const history = useHistory();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onLogoutSuccess = () => {
    logOutUser();
    console.log('Logout success!');
    history.push('/');
  };
  const onFailure = () => {
    console.log('Logout failure!');
  };
  const { signOut } = useGoogleLogout({
    clientId: process.env.REACT_APP_CLIENT_ID,
    onLogoutSuccess,
    onFailure,
  });

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {[
          {
            text: 'Inventory Dashboard',
            path: '',
          },
          {
            text: 'New Inventory Item',
            path: '/create/inventory',
          },
          {
            text: 'Menu Items',
            path: '/menu-items',
          },
          {
            text: 'New Menu Item',
            path: '/create/menu-item',
          },
          {
            text: 'Update Inventory',
            path: '/update/inventory',
          },
        ].map(({ text, path }, index) => (
          <ListItem button key={index}>
            <Link to={path}>
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
      {/* <Divider />
      <List>
        {[
          {
            text: 'Account Settings',
            path: '/account',
          },
          {
            text: 'About Bienventory',
            path: '/about',
          },
        ].map(({ text, path }, index) => (
          <ListItem button key={index}>
            <Link to={path}>
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
      </List> */}
      <Divider />
      <List>
        {['Logout'].map((text, index) => (
          <ListItem button onClick={signOut} key={index}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Bienventory
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="navigation"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </>
  );
}

Navigation.propTypes = {
  window: PropTypes.func,
};

export default Navigation;
