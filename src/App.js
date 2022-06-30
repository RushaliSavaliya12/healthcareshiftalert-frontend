import React from 'react';
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';
import './assets/css/Responsive.css';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard';


export const RoutesPath = {
  indexURL: '/',
  resetPassword: '/reset-password',
  dashboard: '/dashboard',
  
}

function App() {

  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path={RoutesPath.dashboard} element={<Dashboard />} />
      <Route path={RoutesPath.resetPassword} element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
