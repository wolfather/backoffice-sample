import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './app/pages/Login/Login.tsx';
import { Dashboard } from './app/pages/Dashboard/Dashboard.tsx';
import { DashboardSettings } from './app/pages/Dashboard/Settings/Dashboard_Settings.tsx';
import { SessionProvider } from './app/providers/session.tsx';
import { CreateAccount } from './app/pages/Login/CreateAccount/CreateAccount.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, Component: Login },
      {path: 'create-account', Component: CreateAccount},
    ]
  },
  {
    path: "/dashboard",
    children: [
      {index: true, Component: Dashboard},
      {path: "settings", Component: DashboardSettings}
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SessionProvider>
      <RouterProvider router={router} />
    </SessionProvider>
    
  </StrictMode>,
)
