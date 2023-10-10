import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Account from './components/Account';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { HamburgerProvider } from './context/HamburgerContext'; // Import the HamburgerProvider

function App() {
  return (
    <Router>
      <HamburgerProvider>
 
        <div className="bg-[#F1F2F7]">
          <Navbar />
          <div className="flex flex-col md:flex-row">
            <Sidebar />
            <Account />     
          </div>
        </div>
      </HamburgerProvider>
    </Router>
  );
}

export default App;
