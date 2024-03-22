import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Cart = ({ children, clearCart, cartTotalPrice }) => {
  return (
    <Container sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h4" mb={"1rem"}>
        Carrito de compras
      </Typography>

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          flexGrow: 1,
        }}
      >
        {children}
      </Container>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "end" }}>
        <Typography variant="h5" my={"1rem"}>
          Total a pagar: $ {cartTotalPrice()}
        </Typography>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Button onClick={() => clearCart()} variant="outlined">
            Limpiar carrito
          </Button>
          <Button component={Link} to="/checkout" variant="contained">
            Terminar compra
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
