import { CircularProgress, Container, Typography } from "@mui/material";

export const LoadingProductos = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ mt: "4rem", display: "flex", justifyContent: "center" }}
    >
      <CircularProgress size={25} />
      <Typography
        variant="h5"
        sx={{ verticalAlign: "top", fontWeight: "500", ml: "0.5rem" }}
      >
        Cargando productos
      </Typography>
    </Container>
  );
};
