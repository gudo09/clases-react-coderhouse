import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NotFound404 = () => {
  const navigate = useNavigate()
  return (
    <>
      <Container
        sx={{
          background:
            'no-repeat center url("https://res.cloudinary.com/dqfayh5a7/image/upload/v1709681201/dribbble_1_f0bcm2.gif")',
          backgroundSize: "contain",
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 8,
        }}
      >
        <Typography variant="h1" fontWeight={500}>
          Error 404
        </Typography>
        <Button variant="contained" size="large" sx={{mb:10}} onClick={() => navigate("/")}>
          Volver al inicio
        </Button>
      </Container>
    </>
  );
};
