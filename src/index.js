import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { SocketProvider } from './context/SocketProvider';

//React Router DOM is a library that helps you handle navigation in a React application.
//It allows you to define different pages and switch between them without reloading the page. 
//This makes your app feel faster and more like a traditional desktop application.


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <SocketProvider>
    <App />
    </SocketProvider>
    </BrowserRouter>
  
);

