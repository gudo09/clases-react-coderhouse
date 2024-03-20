import { Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Link } from "react-router-dom";

export const ButtonCategory = ({ to, categoryName }) => {
  return (
    <Button to={to} component={Link}>
      {categoryName}
    </Button>
  );
};
