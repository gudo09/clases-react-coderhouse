import { Box, Container, Typography } from "@mui/material";
import { ReturnToHomeButton } from ".";

export const Empty = ({messageText= "No se encontraron resultados", messageButton = undefined}) => {
  return (
    <Container maxWidth="xl" sx={{ mt: "2rem" }}>
      <Typography variant="h3" textAlign="center">
        {messageText}
      </Typography>
      <Box textAlign="center" mt={4}>
        <ReturnToHomeButton messageButton={messageButton}/>
      </Box>
    </Container>
  );
};
