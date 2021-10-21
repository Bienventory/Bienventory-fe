import React from 'react';
import GoogleLogin from 'react-google-login';
import { uselogInUser } from '../../hooks/LoginProvider';

const responseGoogle = (response) => {
  console.log(response);
  // Display something to the user that login failed?
};

export default function Login() {
  const logInUser = uselogInUser();

  return (
    <div className="Login">
      <h2>Bienventory</h2>
      <p>This will tell you about Bienventory!</p>
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
