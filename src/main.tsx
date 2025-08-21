import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import './index.css'

import { RouterProvider } from 'react-router-dom';
import { SessionProvider } from './app/providers/session.tsx';
import { UserPreferenceProvider } from './app/providers/userPreferences.tsx';
import { routes } from './app/routes/route.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SessionProvider>
      <UserPreferenceProvider>
        <RouterProvider router={routes} />
      </UserPreferenceProvider>
    </SessionProvider>
  </StrictMode>,
)

