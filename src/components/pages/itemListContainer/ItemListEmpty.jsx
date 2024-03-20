import { Box, Container, Typography } from "@mui/material";
import { ReturnToHomeButton } from "../../common";

export const ItemListEmpty = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: "2rem" }}>
      <Typography variant="h3" textAlign="center">
        No se encontraron resultados
      </Typography>
      <Box textAlign="center" mt={4}>
        <ReturnToHomeButton />
      </Box>
    </Container>
  );
};
