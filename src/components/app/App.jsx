import React, { Component } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IngredientForm from './ingredients/IngredientForm';
import Navigation from './Navigation';
import Toolbar from '@mui/material/Toolbar';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login';
import Dashboard from '../Dashboard';

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
    if (!this.state.token) {
      return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Login event={this.handleSetState} />
        </Box>
      );
    }

    if (this.state.token) {
      return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Navigation />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Switch>
              <Route
                exact
                path="/"
                render={(routerProps) =>
                  !this.state.user ? (
                    <IngredientForm
                      {...routerProps}
                      event={this.handleSetState}
                    />
                  ) : (
                    <Redirect to="/dashboard" />
                  )
                }
              />

              <Route
                exact
                path="/dashboard"
                render={(routerProps) =>
                  this.state.token && this.state.user ? (
                    <Dashboard {...routerProps} user={this.state.user} />
                  ) : (
                    <Redirect to="/" />
                  )
                }
              />
            </Switch>
          </Box>
        </Box>
      );
    }
  }
}
