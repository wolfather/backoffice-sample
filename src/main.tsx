import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './app/Login/Login.tsx';
import { Dashboard } from './app/Dashboard/Dashboard.tsx';
import { DashboardSettings } from './app/Dashboard/Settings/Dashboard_Settings.tsx';

const router = createBrowserRouter([
  {
    index: true,
    path: "/",
    Component: Login,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      {index: true, Component: Dashboard},
      {path: "settings", Component: DashboardSettings}
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
