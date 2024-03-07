import { createContext, useState } from "react";

export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const cartAdd = () => {};
  const cartDelete = () => {};
  const cartModify = () => {};
  const cartClear = () => {};

  let data = { cartAdd, cartDelete, cartModify, cartClear };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
