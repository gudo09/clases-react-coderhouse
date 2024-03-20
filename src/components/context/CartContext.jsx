import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = (product) => {
    // si no está en el carrito lo agrego
    if (!isInCart(product.id)) {
      //además lo guardo en localStorage
      setCart([...cart, product]);
    } else {
      //creo un nuevo array para setear el carrito con todos los productos que ya tiene
      //y si hay uno que ya está en el carrito le sumo la cantidad al que ya está en él
      setCart(
        cart.map((elementoCart) =>
          elementoCart.id === product.id
            ? {
                ...elementoCart,
                quantity: product.quantity,
              }
            : elementoCart
        )
      );
    }
  };

  useEffect(() => {
    cart.length
      ? localStorage.setItem("cart", JSON.stringify(cart))
      : localStorage.removeItem("cart");
  }, [cart]);

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  // elimino los productos del carrito creando un nuevo arreglo del filter con los elementos que no correspondan al id
  const removeFromCart = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  const cartWidgetCount = () => {
    return cart.reduce(
      (accumulator, current) => accumulator + current.quantity,
      0
    );
  };

  const cartTotalPrice = () => {
    let total = cart.reduce((accumulator, current) => {
      return accumulator + current.price * current.quantity;
    }, 0);
    return roundDecimal(total);
  };

  const roundDecimal = (n) => parseFloat(n.toFixed(2));

  const cartCountById = (id) => {
    let result = cart.find((product) => product.id === id);
    return result ? result.quantity : undefined;
  };

  let data = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    cartWidgetCount,
    cartTotalPrice,
    cartCountById,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
