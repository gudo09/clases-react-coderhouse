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
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "space-between",
        backgroundColor: blueGrey[50],
        width: "320px",
        height: "520px",
        pb: "1rem",
      }}
    >
      <CardContent>
        <CardMedia
          sx={{ p: 0, height: 300, width: 235, mb: "1rem" }}
          image={image}
          title={title}
        />

        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ maxWidth: 235 }}
        >
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
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
