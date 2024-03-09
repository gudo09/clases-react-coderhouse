import { createContext, useState } from "react";

export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addToCart = (product) => {
    // si no está en el carrito lo agrego
    if (!isInCart(product.id)) {
      setCart([...cart, product]);
      return;
    }

    //y si está en el carrito le sumo la cantidad al que ya está en él
    setCart(
      cart.map((elementoCart) =>
        elementoCart.id === product.id
          ? {
              ...elementoCart,
              quantity: elementoCart.quantity + product.quantity,
            }
          : elementoCart
      )
    );
  };

  const clearCart = () => setCart([]);

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  // elimino los productos del carrito creando un nuevo arreglo del filter con los elementos que no correspondan al id
  const removeFromCart = (id) =>
    setCart(cart.filter((product) => product.id !== id));
  const cartModify = () => {};

  let data = { cart, addToCart, removeFromCart, cartModify, clearCart };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
