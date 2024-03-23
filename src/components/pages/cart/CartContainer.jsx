import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartCard, Empty } from "../../common";
import { Cart } from "./Cart";

export const CartContainer = () => {
  const { cart, clearCart, removeFromCart, cartTotalPrice } =
    useContext(CartContext);
  if (!cart.length) return <Empty messageText="Tu carrito está vacío" messageButton="Seguir comprando" />;
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
