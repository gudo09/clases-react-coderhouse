import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box, Button, Typography } from "@mui/material";

export const ItemCount = ({ counter, addOne, subOne, stock, onAdd }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Button
          variant="outlined"
          onClick={subOne}
          disabled={counter === 1 ? true : false}
        >
          -
        </Button>

        <Typography
          variant="h6"
          sx={{
            mx: 2,
            px: 2,
            border: 1,
            borderRadius: 1,
            borderColor: "rgba(25, 118, 210, 0.5)",
            userSelect: "none",
          }}
        >
          {counter}
        </Typography>

        <Button
          variant="outlined"
          onClick={addOne}
          disabled={counter === stock ? true : false}
        >
          +
        </Button>
      </Box>

      <Button
        variant="contained"
        sx={{ mt: 2 }}
        startIcon={<AddShoppingCartIcon />}
        //Para pasar una funcion con parametros, la tengo que enviar como callback en las props
        onClick={() => onAdd(counter)}
      >
        agregar al carrito
      </Button>
    </Box>
  );
};
