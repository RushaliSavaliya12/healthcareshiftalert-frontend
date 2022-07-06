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
import ManageFacilityEdit from './pages/ManageFacilityEdit';
import ManageCliniciansEdit from './pages/ManageCliniciansEdit';
import WorkforceCalculator from './pages/WorkforceCalculator';
import Notes from './pages/Notes';

export const RoutesPath = {
  indexURL: '/',
  resetPassword: '/reset-password',
  dashboard: '/dashboard',
  manageUser: '/manage-users',
  managefacilityEdit: '/edit-facility',
  managecliniciansEdit: '/edit-clinicians',
  workforceCalculator:'/workforce-calculator',
  notes:'/notes',
}

function App() {

  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path={RoutesPath.dashboard} element={<Dashboard />} />
      <Route path={RoutesPath.resetPassword} element={<ResetPassword />} />
      <Route path={RoutesPath.manageUser} element={<ManageUser />} />
      <Route path={RoutesPath.managefacilityEdit} element={<ManageFacilityEdit />} />
      <Route path={RoutesPath.managecliniciansEdit} element={<ManageCliniciansEdit />} />
      <Route path={RoutesPath.workforceCalculator} element={<WorkforceCalculator />} />
      <Route path={RoutesPath.notes} element={<Notes />} />
    </Routes>
  );
}

export default App;
