import React from 'react';
import GoogleLogin from 'react-google-login';
import { uselogInUser } from '../../hooks/LoginProvider';

const responseGoogle = (response) => {
  console.log(response);
};

export default function Login() {
  const logInUser = uselogInUser();

  return (
    <div className="Login">
      <h2>Bienventory</h2>
      <p>
        Bienventory was designed with restaurants in mind. Start by creating an
        inventory with the scope of ingredients and meals.You are then able to
        upload CSV files to update inventory and return a text notification.
        This allows you to get accurate, up to date information about your
        restaurant inventory.
      </p>
      <GoogleLogin
        className="button"
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="Login using Google"
        onSuccess={logInUser}
        isSignedIn={true}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}
