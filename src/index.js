// First Entry Point

// All Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// DEVELOPMENT
// ----------------------
import App from './App';
// ----------------------

// TESTING TESTING TESTING
// ------------------------
// import App from './Testing/populateData.js';
// ------------------------

import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
