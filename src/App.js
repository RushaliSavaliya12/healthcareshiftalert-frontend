import React from 'react';
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/Custom-icons.css';
import './assets/css/App.css';
import './assets/css/Responsive.css';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard';
import ManageUser from './pages/ManageUser';
import ManageUserEdit from './pages/ManageUserEdit';
import Timesheets from './pages/Timehseets';


export const RoutesPath = {
  indexURL: '/',
  resetPassword: '/reset-password',
  dashboard: '/dashboard',
  manageUser: '/manage-users',
  manageUserEdit: '/manage-users/edit',
  timesheets: '/timesheets'
}

function App() {

  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path={RoutesPath.dashboard} element={<Dashboard />} />
      <Route path={RoutesPath.resetPassword} element={<ResetPassword />} />
      <Route path={RoutesPath.manageUser} element={<ManageUser />} />
      <Route path={RoutesPath.manageUserEdit} element={<ManageUserEdit />} />
      <Route path={RoutesPath.timesheets} element={<Timesheets />} />
    </Routes>
  );
}

export default App;
