import React, { createContext, useState } from 'react';

export const CurrentComponentContext = createContext();

export const CurrentComponentProvider = ({ children }) => {
  const [currentComponent, setCurrentComponent] = useState('');

  return (
    <CurrentComponentContext.Provider value={{ currentComponent, setCurrentComponent }}>
      {children}
    </CurrentComponentContext.Provider>
  );
};
