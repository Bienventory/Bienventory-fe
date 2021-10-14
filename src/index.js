import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginProvider from './hooks/LoginProvider';
import './index.css';
render(
  <Router>
    <LoginProvider>
      <App />
    </LoginProvider>
  </Router>,
  document.getElementById('root')
);
