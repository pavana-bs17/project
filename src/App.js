import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Account from "./components/Account";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-[#F1F2F7]">
      <Navbar />
      <div className="flex relative flex-col md:flex-row">
        <Sidebar />
        <Account />
      </div>
      <Routes>
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
