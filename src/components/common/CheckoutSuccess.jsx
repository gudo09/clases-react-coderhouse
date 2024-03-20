import { Box, Container, Typography } from "@mui/material";
import { ReturnToHomeButton } from "./ReturnToHomeButton";

export const CheckoutSuccess = ({ orderId }) => {
  return (
    <Container fixed sx={{ mt: "2rem" }}>
      <Typography textAlign="center" variant="h2">
        Gracias por tu compra 🛒
      </Typography>

      <Box
        sx={{
          mt: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Typography variant="h4">Orden de compra:</Typography>
        <Typography variant="h4" sx={{ fontWeight: "800" }}>
          {orderId}
        </Typography>
      </Box>
      <Box sx={{ mt: "2rem", display: "flex", justifyContent: "center" }}>
        <ReturnToHomeButton />
      </Box>
    </Container>
  );
};
