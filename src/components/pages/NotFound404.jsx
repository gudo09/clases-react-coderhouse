import { Container, Typography } from "@mui/material";
import { ReturnToHomeButton } from "../common";

export const NotFound404 = () => {
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
        <ReturnToHomeButton />
      </Container>
    </>
  );
};
