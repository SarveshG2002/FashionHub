import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Login from './Login.jsx';
import AdminComponent from "./pages/AdminComponent.jsx";
import DashboardComponent from "./pages/DashboardPage.jsx";
import UserComponent from "./pages/UsersPage.jsx";
import SeoComponent from "./pages/SeoPage.jsx";
import BrandComponent from "./pages/BrandPage.jsx";
import CategoryComponent from "./pages/CategoryPage.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminComponent />}>
          <Route path="dashboard" element={<DashboardComponent />} />
          <Route path="brands" element={<BrandComponent />} />
          <Route path="users" element={<UserComponent />} />
          <Route path="seo" element={<SeoComponent />} />
          <Route path="category" element={<CategoryComponent />} />

          {/* Add more nested routes here as needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;