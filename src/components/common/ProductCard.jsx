import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { blueGrey } from "@mui/material/colors";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const ProductCard = ({ id, image, title, price }) => {
  return (
    <Card
      sx={{
        backgroundColor: blueGrey[50],
        display: "flex",
        flexWrap: "no-wrap",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "space-between",
        height: "32rem",
        pb: "1rem",
      }}
    >
      <CardMedia
        image={image}
        title={title}
        component="img"
        sx={{
          mt: "1rem",
          maxHeight: "18rem",
          objectFit: "scale-down",
        }}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" textAlign="center">
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary" textAlign="center">
          ${price}
        </Typography>
      </CardContent>

      <CardActions sx={{ mx: "auto" }}>
        {/* <ItemCountContainer stock={stock} /> */}

        <Link to={`/item/${id}`}>
          <Button variant="contained">Ver detalles</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
