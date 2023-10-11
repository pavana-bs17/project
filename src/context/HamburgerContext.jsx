
import React, { createContext, useContext, useState } from 'react';

export const HamburgerContext = createContext();

export const HamburgerProvider = ({ children }) => {
  const [hamburger, setHamburger] = useState(false);

  const toggleModal = () => {
    setHamburger(!hamburger);
  };

  const [selectedMenu, setSelectedMenu] = useState("My Account");

  return (
    <HamburgerContext.Provider value={{ hamburger, toggleModal, selectedMenu, setSelectedMenu}}>
      {children}
    </HamburgerContext.Provider>
  );
}
