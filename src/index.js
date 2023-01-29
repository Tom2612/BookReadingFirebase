import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { BookContextProvider } from './contexts/BookContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BookContextProvider>
        <App />
      </BookContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
