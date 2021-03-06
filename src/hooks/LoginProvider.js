import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { getUserById } from '../services/fetchUtils';

export const Context = createContext();

//context: user authentication, inventory array, menu array

const LoginProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [loggedIn, setloggedIn] = useState(false);

  const logInUser = async ({ googleId }) => {
    const response = await getUserById(googleId);
    if (response.status === 500)
      setUser({ googleId, notifications: true, phoneNumber: null });
    else setUser(response);
    setloggedIn(true);
  };

  const logOutUser = () => {
    setUser('');
    setloggedIn(false);
  };

  return (
    <Context.Provider
      value={{ user, loggedIn, logInUser, logOutUser, setUser }}
    >
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

export const usesetUser = () => {
  const { setUser } = useContext(Context);
  return setUser;
};

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginProvider;
