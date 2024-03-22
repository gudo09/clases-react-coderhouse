import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const ProductCard = ({ id, image, title, price }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#efefef",
        display: "flex",
        flexWrap: "no-wrap",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "space-between",
        height: "23rem",
        pb: "1rem",
      }}
    >
      <CardMedia
        image={image}
        title={title}
        component="img"
        sx={{
          mt: "1rem",
          maxHeight: "12rem",
          objectFit: "scale-down",
        }}
      />

      <CardContent sx={{ py: 0, flexGrow: 1, mt: "0.5rem" }}>
        <Typography gutterBottom variant="h6" textAlign="center">
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary" textAlign="center">
          ${price}
        </Typography>
      </CardContent>

      <CardActions sx={{ mx: "auto", p: 0 }}>
        {/* <ItemCountContainer stock={stock} /> */}

        <Link to={`/item/${id}`}>
          <Button variant="contained">Ver detalles</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
