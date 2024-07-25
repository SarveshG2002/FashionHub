import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login.jsx';
import AdminComponent from "./pages/AdminComponent.jsx"

function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/admin" element={<AdminComponent />}/>
            {/* <Route path="/dashboard" element={<AdminComponent/>}>
          </Route> */}
        </Routes>
      
    </Router>
  );
}

export default App;
