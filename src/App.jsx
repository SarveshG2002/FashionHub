import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login.jsx';
import AdminComponent from "./components/AdminComponent.jsx"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/admin" element={<AdminComponent />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
