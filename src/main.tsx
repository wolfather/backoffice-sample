import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './app/Login/Login.tsx';

const router = createBrowserRouter([
  {
    index: true,
    path: "/",
    Component: Login,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
