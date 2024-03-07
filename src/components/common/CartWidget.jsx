import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const CartWidget = () => {
  const navigate = useNavigate();

  return (
    <div>
      <IconButton
        aria-label="ShoppingCartIcon"
        onClick={() => navigate("/cart")}
      >
        <Badge badgeContent={0} showZero color="secondary">
          <ShoppingCartIcon sx={{ color: "white" }}></ShoppingCartIcon>
        </Badge>
      </IconButton>
    </div>
  );
};
