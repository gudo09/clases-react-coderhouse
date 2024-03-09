import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div>
      <IconButton
        aria-label="ShoppingCartIcon"
        onClick={() => navigate("/cart")}
      >
        <Badge badgeContent={cart.length} showZero color="secondary">
          <ShoppingCartIcon sx={{ color: "white" }}></ShoppingCartIcon>
        </Badge>
      </IconButton>
    </div>
  );
};
