import React from 'react';
import './App.css';
import Login from "./login_components/Login";
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/login" element={<Login />} />;
          <Route path="/home" element={<Home />} />;
        </Routes>
      </header>
    </div>
  );
}

export default App;
