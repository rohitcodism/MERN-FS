import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryApp } from './QueryApp';
import {BrowserRouter} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryApp />
    </BrowserRouter>
  </React.StrictMode>
);
