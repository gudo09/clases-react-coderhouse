import { CircularProgress, Container, Typography } from "@mui/material";

export const LoadingProductos = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ mt: "20rem", display: "flex", justifyContent: "center" }}
    >
      <CircularProgress size={40} />
      <Typography
        variant="h4"
        sx={{ verticalAlign: "top", fontWeight: "500", ml: "0.5rem" }}
      >
        Cargando productos
      </Typography>
    </Container>
  );
};
