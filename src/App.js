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
import Timesheets from './pages/Timehseets';
import Documents from './pages/Documents';
import DocumentDetails from './pages/DocumentDetails';
import EditProfile from './pages/EditProfile';
import FeedbacksAndRatings from './pages/FeedbacksAndRatings';
import Scheduling from './pages/Scheduling';

export const RoutesPath = {
  indexURL: '/',
  resetPassword: '/reset-password',
  dashboard: '/dashboard',
  manageUser: '/manage-users',
  managefacilityEdit: '/edit-facility',
  managecliniciansEdit: '/edit-clinicians',
  workforceCalculator:'/workforce-calculator',
  notes:'/notes',
  timesheets: '/timesheets',
  documents:'/documents',
  documentsDetails:'/document-details',
  editProfile:'/edit-profile',
  feedbackratings:'/feedback-ratings',
  scheduling:'/scheduling'
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
      <Route path={RoutesPath.timesheets} element={<Timesheets />} />
      <Route path={RoutesPath.notes} element={<Notes />} />
      <Route path={RoutesPath.documents} element={<Documents />} />
      <Route path={RoutesPath.documentsDetails} element={<DocumentDetails />} />
      <Route path={RoutesPath.editProfile} element={<EditProfile />} />
      <Route path={RoutesPath.feedbackratings} element={<FeedbacksAndRatings />} />
      <Route path={RoutesPath.scheduling} element={<Scheduling />} />
    </Routes>
  );
}

export default App;
