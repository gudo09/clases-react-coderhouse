import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box, Button, Typography } from "@mui/material";

const ItemCount = ({ counter, addOne, subOne }) => {
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
          }}
        >
          {counter}
        </Typography>

        <Button variant="outlined" onClick={addOne}>
          +
        </Button>
      </Box>

      <Button
        variant="contained"
        sx={{ my: 2 }}
        startIcon={<AddShoppingCartIcon />}
      >
        agregar al carrito
      </Button>
    </Box>
  );
};

export default ItemCount;
