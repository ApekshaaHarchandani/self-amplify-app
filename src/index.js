import React from 'react'; // Importing the React library, which is necessary for writing React components
import ReactDOM from 'react-dom/client'; // Importing the ReactDOM library, used for rendering React components into the DOM
import './index.css'; // Importing CSS styles specific to the index.js file
import App from './App'; // Importing the App component, which represents the main component of the application
import reportWebVitals from './reportWebVitals'; // Importing a module for reporting web vitals
import { Amplify } from 'aws-amplify'; // Importing the Amplify object from the aws-amplify package
import config from './aws-exports'; // Importing the configuration file for AWS Amplify
Amplify.configure(config); // Configuring AWS Amplify using the provided configuration

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
