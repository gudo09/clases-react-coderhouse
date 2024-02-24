import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ItemCountContainer } from "./itemCount/ItemCountContainer";
import { blueGrey } from "@mui/material/colors";
import { Button } from "@mui/material";

export const ProductCard = ({ image, title, price, description, stock }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: blueGrey[50],
      }}
    >
      <CardContent>
        <CardMedia
          sx={{ p: 0, height: 300, width: 235 }}
          image={image}
          title={title}
        />

        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          ${price}
        </Typography>
      </CardContent>

      <CardActions sx={{ mx: "auto" }}>
        {/* <ItemCountContainer stock={stock} /> */}
        <Button
        variant="contained"
        sx={{ mb: 2 }}
      >
        Ver detalles
      </Button>
      </CardActions>
    </Card>
  );
};
