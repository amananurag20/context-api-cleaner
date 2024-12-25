import  { createContext, useState } from 'react';

export const ColorContext = createContext();

// eslint-disable-next-line react/prop-types
export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('red');

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};
