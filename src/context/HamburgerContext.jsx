
import React, { createContext, useContext, useState } from 'react';

export const HamburgerContext = createContext();

export const HamburgerProvider = ({ children }) => {
  const [hamburger, setHamburger] = useState(false);

  const toggleModal = () => {
    setHamburger(!hamburger);
  };

  return (
    <HamburgerContext.Provider value={{ hamburger, toggleModal }}>
      {children}
    </HamburgerContext.Provider>
  );
}
