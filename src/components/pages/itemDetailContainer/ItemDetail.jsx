import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { ItemCountContainer } from "../../common";
import { blueGrey } from "@mui/material/colors";

export const ItemDetail = ({ title, description, image, price, stock }) => {
  return (
    <Container maxWidth="xl">
      <Card
        sx={{
          backgroundColor: blueGrey[50],
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          mb: 4,
          maxHeight: 650,
        }}
      >
        <CardMedia
          image={image}
          component="img"
          sx={{
            placeSelf: "center",
            gridColumn: "1 / span 1",
            gridRow: "1 / span 3",
            maxHeight: "90%",
            objectFit: "contain",
            my: "auto",
          }}
        ></CardMedia>

        <CardContent
          sx={{
            mr: 4,
            gridColumn: "2 / span 2",
            gridRow: "1 / span 1",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography variant="h2" sx={{ mt: 2, fontWeight: 700 }}>
            {" "}
            {title}{" "}
          </Typography>
          <Typography variant="h4">Descripción</Typography>
          <Typography variant="p"> {description} </Typography>

          <Box sx={{ display: "flex", gap: 2, alignItems: "baseline" }}>
            <Typography variant="h5">Precio:</Typography>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              ${price}
            </Typography>
          </Box>
        </CardContent>

        <CardActions
          sx={{
            my: 4,
            gridColumn: "2 / span 1",
            gridRow: "3 / span 1",
          }}
        >
          <ItemCountContainer stock={stock} />
        </CardActions>
      </Card>
    </Container>
  );
};
