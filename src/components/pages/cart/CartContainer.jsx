import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CartCard } from "../../common";

export const CartContainer = () => {
  const { cart, clearCart, removeFromCart, cartTotalPrice } =
    useContext(CartContext);

  return (
    <Container>
      Carrito de compras
      <br />
      <Container sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {cart.map((product) => (
          <CartCard
            product={product}
            key={product.id}
            removeFromCart={removeFromCart}
          ></CartCard>
        ))}

        <Typography>Total a pagar: $ {cartTotalPrice()}</Typography>
      </Container>
      <Button onClick={() => clearCart()}>Limpiar carrito</Button>
      <Button component={Link} to="/checkout" variant="contained">
        Terminar compra
      </Button>
    </Container>
  );
};
