import { Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Link } from "react-router-dom";

export const ButtonCategory = ({ to, categoryName }) => {
  return (
    <Button  to={to} sx={{ bgcolor: blue[500] }} component={Link}>
      {categoryName}
    </Button>
  );
};
