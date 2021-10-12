import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

//context: user authentication, inventory array, menu array

const LoginProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [loggedIn, setloggedIn] = useState(false);

  const logInUser = async (googleId) => {
    // const response = await fetch(`theapi.urrl.com///${googleId}`);
    // const userObj = await response.json();
    const userObj = { google_id: googleId, notifications: false };

    setUser(userObj);
    setloggedIn(true);
  };

  const logOutUser = () => {
    setUser('');
    setloggedIn(false);
  };

  return (
    <Context.Provider value={{ user, loggedIn, logInUser, logOutUser }}>
      {children}
    </Context.Provider>
  );
};

export const uselogInUser = () => {
  const { logInUser } = useContext(Context);
  return logInUser;
};

export const uselogOutUser = () => {
  const { logOutUser } = useContext(Context);
  return logOutUser;
};

export const useloggedIn = () => {
  const { loggedIn } = useContext(Context);
  return loggedIn;
};

export const useUser = () => {
  const { user } = useContext(Context);
  return user;
};

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginProvider;
