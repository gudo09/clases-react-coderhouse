import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartCard } from "../../common";
import { Cart } from "./Cart";

export const CartContainer = () => {
  const { cart, clearCart, removeFromCart, cartTotalPrice } =
    useContext(CartContext);

  return (
    <Cart clearCart={clearCart} cartTotalPrice={cartTotalPrice}>
        {cart.map((product) => (
          <CartCard
            product={product}
            key={product.id}
            removeFromCart={removeFromCart}
          ></CartCard>
        ))}
    </Cart>
  );
};
