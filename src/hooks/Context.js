import React, { createContext, useReducer } from 'react';

export const Context = createContext();

//context: user authentication, ingredients array, menu array 

const initialState = {
  user: true,
  ingredients: [],
  menuItems: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    default: return state;
  }
};

