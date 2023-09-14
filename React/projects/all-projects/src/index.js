import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryApp } from './QueryApp';
import {BrowserRouter} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <QueryApp />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
