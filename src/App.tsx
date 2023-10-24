import React from 'react';
import './dashboard/dashboard.css';
import Dashboard from './dashboard/dashboard'
import './juice/juice.css'
import Juice from './juice/juice';
import './vape/vape.css'
import Vape from './vape/vape';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/juice" element={<Juice />} />
          <Route path="/vape" element={<Vape />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;