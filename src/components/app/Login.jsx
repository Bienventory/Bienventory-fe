import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
};

export default class Login extends Component {
  render() {
    return (
      <div className="Login">
        <h2>Bienventory</h2>
        <p>
          This will tell you about Bienventory!
        </p>
        <GoogleLogin
          className="button"
          clientId={process.env.REACT_APP_CLIENT_ID}
          buttonText="Login using Google"
          onSuccess={(token) => {
            this.props.event(token.profileObj);
          }}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    );
  }
}
