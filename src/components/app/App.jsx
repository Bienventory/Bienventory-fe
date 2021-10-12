import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Dashboard from './Dashboard';
import InventoryForm from './inventory/InventoryForm';
import InventoryDetail from './inventory/InventoryDetail';
import Login from './Login';
import Navigation from './Navigation';
import MenuItemForm from './Menu/MenuItemForm';
import { useloggedIn, useUser } from '../../hooks/LoginProvider';

export default function App() {
  const loggedIn = useloggedIn();
  const user = useUser();

  if (!loggedIn) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Login />
      </Box>
    );
  }

  if (loggedIn && !user) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Typography>
          Get started by adding your first inventory item!
        </Typography>
        <InventoryForm />
      </Box>
    );
  }

  if (loggedIn && user) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Navigation />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />

          <Switch>
            <Route exact path="/" component={Dashboard} />

            <Route exact path="/create/inventory" component={InventoryForm} />

            <Route exact path="/create/menu-item" component={MenuItemForm} />

            <Route exact path="/inventory/:id" component={InventoryDetail} />
          </Switch>
        </Box>
      </Box>
    );
  }
  // }
}
