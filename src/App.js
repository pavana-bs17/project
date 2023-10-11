import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { HamburgerContext } from "./context/HamburgerContext";
import { menus } from "./utils/constant";
import Account from "./components/Account";

function App() {
  const { selectedMenu } = useContext(HamburgerContext);

  const componentMapping = {
    "My Account": Account, 
    // Add more menu items and their corresponding components here
  };

  const SelectedComponent = componentMapping[selectedMenu];

  return (
    <div className="bg-[#F1F2F7]">
      <Navbar />
      <div className="flex relative flex-col md:flex-row">
        <Sidebar defaultSelectedMenu={selectedMenu} menus={menus} />
        <Routes>
          {menus.map((menu) => (
            <Route
              key={menu.title}
              path={menu.link}
              element={componentMapping[menu.title] ? <SelectedComponent /> : <Account />}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
