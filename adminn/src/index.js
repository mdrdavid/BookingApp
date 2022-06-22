import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './components/context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <DrkModeContextProvider>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
    </DrkModeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
