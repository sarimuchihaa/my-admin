import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Login from './Auth/Login/Login';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br bg-gray-900">
      <h1 className='text-3xl text-rose-400 font-bold'>Admin 🖼️⭐</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
