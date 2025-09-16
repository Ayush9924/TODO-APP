import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'; // Make sure global styles are imported

// Find the 'root' div in your public/index.html file
const rootElement = document.getElementById('root');

// Create the root of your React application
const root = ReactDOM.createRoot(rootElement);

// Render your App component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);