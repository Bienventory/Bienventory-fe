import React, { createContext, useReducer } from 'react';

export const Context = createContext();

//context: user authentication, inventory array, menu array 

const initialState = {
  user: true,
  inventory: [],
  menuItems: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    default: return state;
  }
};

