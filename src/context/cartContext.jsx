import { createContext, useState } from 'react';

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [Cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ Cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};