import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './app/Login/Login'
import { Dashboard } from './app/Dashboard/Dashboard'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="dashboard/*" element={<Dashboard />} />
      <Route path="dashboard">
        <Route path="*" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App
