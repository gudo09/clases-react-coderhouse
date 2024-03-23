import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ReturnToHomeButton = ({ messageButton = "Volver al inicio" }) => {
  const navigate = useNavigate();
  return (
    <Button
      variant="contained"
      size="large"
      sx={{ mb: 10 }}
      onClick={() => navigate("/")}
    >
      {messageButton}
    </Button>
  );
};
