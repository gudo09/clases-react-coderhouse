import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";

export const CartWidget = () => {
  return (
    <div>
      <IconButton aria-label="ShoppingCartIcon">
        <ShoppingCartIcon sx={{ color: "white" }}></ShoppingCartIcon>
      </IconButton>
      <span>(13)</span>
    </div>
  );
};
