import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import ControlPanel from './pages/control-panel/ControlPanel';
import Login from './pages/Login';
import Register from './pages/Register';
import AppNavbar from './components/AppNavbar';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/dashboard" 
          element={<Dashboard />} 
        />
        <Route 
          path="/control-panel" 
          element={<ControlPanel />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;