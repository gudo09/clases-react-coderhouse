import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import { ItemCountContainer } from "../../common";
import { blueGrey } from "@mui/material/colors";

export const ItemDetail = ({
  item: { image, title, stock, description, price },
  onAdd,
  initial,
}) => {
  return (
    <Container maxWidth="lg">
      <Card
        sx={{
          backgroundColor: blueGrey[50],
          display: "grid",
          gridTemplateColumns: "1fr, 10px, repeat(2, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          mb: "2rem",
          maxHeight: 600,
        }}
      >
        <CardMedia
          image={image}
          title={title}
          component="img"
          sx={{
            pl: "0.75rem",
            placeSelf: "center",
            gridColumn: "1 / span 1",
            gridRow: "1 / span 3",
            maxHeight: "80%",
            maxWidth: "470px",
            objectFit: "contain",
            my: "auto",
          }}
        />
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{
            my: 4,
            mx: 2,
            gridColumn: "2 / span 1",
            gridRow: "1 / span 3",
          }}
        />
        <CardContent
          sx={{
            mr: 4,
            gridColumn: "3 / span 2",
            gridRow: "1 / span 1",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography variant="h3" sx={{ mt: 2, fontWeight: 400 }}>
            {" "}
            {title}{" "}
          </Typography>
          <Typography variant="h5" sx={{ textDecoration: "underline" }}>
            Descripción:{" "}
          </Typography>
          <Typography variant="p"> {description} </Typography>

          <Box sx={{ display: "flex", gap: 1, alignItems: "baseline" }}>
            <Typography variant="h5">Precio:</Typography>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              ${price}
            </Typography>
          </Box>
        </CardContent>

        <CardActions
          sx={{
            my: 2,
            gridColumn: "3 / span 1",
            gridRow: "2 / span 2",
            alignItems: "end",
          }}
        >
          <ItemCountContainer stock={stock} onAdd={onAdd} initial={initial} />
        </CardActions>
      </Card>
    </Container>
  );
};
