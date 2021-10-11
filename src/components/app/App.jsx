import React, { Component } from 'react';
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
import MenuItemForm from '../menu/MenuItemForm';

export default class App extends Component {
  state = {
    token: '',
    user: '',
  };

  handleSetState = async (profileObj) => {
    await this.setState({
      token: profileObj,
    });
    // const userObj = await fetch(`theapi.urrl.com///${profileObj.googleId}`);
    // const data = await userObj.json();
    const data = { google_id: 2304598, notifications: false };

    await this.setState({ user: data });
  };

  render() {
    if (!this.state.token && !this.state.user) {
      return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Login event={this.handleSetState} />
        </Box>
      );
    }

    if (this.state.token && !this.state.user) {
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

    if (this.state.token && this.state.user) {
      return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Navigation />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />

            <Switch>
              <Route exact path="/" component={Dashboard} />

              <Route
                exact
                path="/create/inventory"
                component={InventoryForm}
              />

              <Route exact path="/create/menu-item" component={MenuItemForm} />

              <Route
                exact
                path="/inventory/:name"
                component={InventoryDetail}
              />
            </Switch>
          </Box>
        </Box>
      );
    }
  }
}
