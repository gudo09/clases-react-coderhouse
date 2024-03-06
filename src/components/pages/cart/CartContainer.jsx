import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

export const CartContainer = () => {
  return (
    <Container>
      Carrito de compras
      <br />
      <Button component={Link} to="/checkout" variant="contained">
        Terminar compra
      </Button>
    </Container>
  );
};
