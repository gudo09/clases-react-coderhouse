import { Box, Button, Container, TextField, Typography } from "@mui/material";

export const Checkout = ({ handleSubmit, handleUser }) => {
  return (
    <Container>
      <Typography variant="h3">Checkout</Typography>

      {/*Por defecto el onSubmit de React envía el evento para que sea utilizado */}
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Nombre"
          placeholder="Ingresá tu nombre"
          variant="outlined"
          onChange={handleUser}
        />
        <TextField
          name="lastName"
          label="Apellido"
          placeholder="Ingresá tu apellido"
          variant="outlined"
          onChange={handleUser}
        />

        {/*A los botones de Material UI se les debe aclarar que son de tipo submit cuando estan dentro de un formulario*/}
        <Button variant="contained" size="large" type="submit">
          Enviar
        </Button>
      </Box>
    </Container>
  );
};
