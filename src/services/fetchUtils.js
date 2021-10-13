export const createUser = async (userData) => {
  let response = await fetch('https://bienventory.herokuapp.com/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  response = await response.json();
  return response;
};

export const getUserById = async (id) => { //loginprovider.js
  let response = await fetch(`https://bienventory.herokuapp.com/api/v1/users/${id}`);
  response = await response.json();
  return response;
};

export const updateUser = async (updatedData) => { //account settings page
  let response = await fetch(`https://bienventory.herokuapp.com/api/v1/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
  });
  response = await response.json();
  return response;
};
