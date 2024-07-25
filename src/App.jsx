import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Login from './Login.jsx';
import AdminComponent from "./pages/AdminComponent.jsx";
import DashboardComponent from "./pages/DashboardPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminComponent />}>
          <Route path="dashboard" element={<DashboardComponent />} />
          {/* Add more nested routes here as needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;