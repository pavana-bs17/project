import React, { createContext, useContext, useState } from 'react';

const HamburgerContext = createContext();

export function HamburgerProvider({ children }) {
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

export function useHamburger() {
  return useContext(HamburgerContext);
}
