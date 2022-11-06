import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./login_components/Login";
import { Route, Routes } from "react-router-dom"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route path="/login" element={<Login />} />;
        </Routes>
      </header>
    </div>
  );
}

export default App;
