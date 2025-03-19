import React, { createContext, useContext, useState } from 'react';

const SecondContext = createContext();

export const SecondProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <SecondContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </SecondContext.Provider>
  );
};

export const useSecondContext = () => useContext(SecondContext);
