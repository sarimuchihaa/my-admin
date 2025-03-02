import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Login from './Auth/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br bg-gray-900">
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
