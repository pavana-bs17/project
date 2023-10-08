import './App.css';
import React from 'react';
import Navbar  from './components/Navbar';
import Account from './components/Account';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <Router>
    <div className="bg-[#F1F2F7]">
      <Navbar />
      <div className='flex'>
      <Sidebar />
      <Account />
      </div>
    </div>
  </Router>
  );
}

export default App;
