import { ItemCount } from "./ItemCount";
import { useCount } from "../../hooks";
import { Box, Chip, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export const ItemCountContainer = ({ stock, onAdd, initial = 1 }) => {
  //uso el custom hook
  const { count, increment, decrement } = useCount(initial);

  const { cartCountById } = useContext(CartContext);

  const { id } = useParams();

  const addOne = () => {
    if (count < stock) {
      increment();
    } else {
      alert("stock maximo");
    }
  };

  const subOne = () => {
    if (count > 1) {
      decrement();
    } else {
      alert("no puede ser menos de 1");
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <>
        {cartCountById(id) && (
          <Chip
            label={`¡Ya tienes ${cartCountById(id)} en tu carrito!`}
            color="success"

          />
        )}
      </>
      <>
        {stock > 0 ? (
          <ItemCount
            counter={count}
            addOne={addOne}
            subOne={subOne}
            stock={stock}
            onAdd={onAdd}
          />
        ) : (
          <Typography
            variant="h5"
            color={grey[600]}
            sx={{
              p: 2,
              backgroundColor: grey[300],
              borderRadius: "5%",
              mb: "2rem",
            }}
          >
            Sin stock
          </Typography>
        )}
      </>
    </Box>
  );
};
