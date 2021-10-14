export const createUser = async (userData, phoneNumber) => {
  let response = await fetch('https://bienventory.herokuapp.com/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      google_id: userData.googleId,
      notifications: userData.notifications,
      phone_number: phoneNumber,
    }),
  });
  response = await response.json();
  return response;
};

export const getUserById = async (id) => {
  //loginprovider.js
  let response = await fetch(
    `https://bienventory.herokuapp.com/api/v1/users/${id}`
  );
  response = await response.json();
  return response;
};

export const updateUser = async (updatedData) => {
  //account settings page
  let response = await fetch(
    `https://bienventory.herokuapp.com/api/v1/users/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    }
  );
  response = await response.json();
  return response;
};

export async function addSalesData(salesData, phoneNumber) {
  let response = await fetch('https://bienventory.herokuapp.com/api/v1/sales', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(salesData, phoneNumber),
  });
  response = await response.json();
  return response;
}

export const getInventoryById = async (id) => {
  //loginprovider.js
  let response = await fetch(
    `https://bienventory.herokuapp.com/api/v1/inventory/${id}`
  );
  response = await response.json();
  return response;
};

export const updateInventory = async (id, updatedData) => {
  //account settings page
  let response = await fetch(
    `https://bienventory.herokuapp.com/api/v1/inventory/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    }
  );
  response = await response.json();
  return response;
};

export const createInventoryItem = async (inventoryItem) => {
  let response = await fetch(
    'https://bienventory.herokuapp.com/api/v1/inventory',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inventoryItem),
    }
  );
  response = await response.json();
  return response;
};


export const deleteInventory = async (id) => {
  let response = await fetch(
    `https://bienventory.herokuapp.com/api/v1/inventory/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  response = await response.json();
  return response;
};

export const createMenuItem = async (newItem) => {
  let response = await fetch('https://bienventory.herokuapp.com/api/v1/menus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newItem),
  });
  response = await response.json();
  return response;
};
