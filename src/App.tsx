import React from 'react';
import './App.css';
import Login from "./login_components/Login";
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
      // <header className="App-header">
      <div className='h-screen w-screen bg-dark'>
        <Routes>
          <Route path="/login" element={<Login />} />;
          <Route path="/home" element={<Home />} />;
        </Routes>
      </div>
      // </header>
  );
}

export default App;
