import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { CheckoutSuccess } from "../../common/CheckoutSuccess";

export const Checkout = ({ handleSubmit, handleUser, orderId, isLoading }) => {
  if (orderId) return <CheckoutSuccess orderId={orderId} />;
  return (
    <Container>
      <Typography variant="h3" mb="1rem">
        Checkout
      </Typography>

      {/*Por defecto el onSubmit de React envía el evento para que sea utilizado */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
      >
        <TextField
          name="name"
          label="Nombre"
          placeholder="Ingresá tu nombre"
          variant="outlined"
          onChange={handleUser}
        />
        <TextField
          name="phone"
          label="Teléfono"
          placeholder="Ingresá tu número de telefono"
          type="tel"
          variant="outlined"
          onChange={handleUser}
        />

        <TextField
          name="email"
          label="Correo electrónico"
          placeholder="Ingresá tu e-mail"
          variant="outlined"
          onChange={handleUser}
        />

        <TextField
          name="confirmEmail"
          label="Confirmar correo electrónico"
          placeholder="Ingresá nuevamente tu e-mail"
          variant="outlined"
          onChange={handleUser}
        />

        {/*A los botones de Material UI se les debe aclarar que son de tipo submit cuando estan dentro de un formulario*/}

        <Box
          sx={{
            gridColumn: "1 /-1",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            disabled={isLoading}
            size="large"
            type="submit"
          >
            Finalizar compra
            {isLoading && (
              <CircularProgress
                size="1rem"
                color="inherit"
                sx={{ ml: "1rem" }}
              />
            )}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
