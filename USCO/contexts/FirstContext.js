import React, { createContext, useContext, useState } from 'react';

const FirstContext = createContext();

export const FirstProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <FirstContext.Provider value={{ count, increment, decrement }}>
      {children}
    </FirstContext.Provider>
  );
};

export const useFirstContext = () => useContext(FirstContext);
