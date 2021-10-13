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
