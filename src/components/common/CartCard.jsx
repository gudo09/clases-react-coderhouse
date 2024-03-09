import { ClearSharp } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

export const CartCard = ({
  product: { id, image, title, price, quantity },
  removeFromCart,
}) => {
  console.log(image);
  return (
    <Card sx={{ display: "flex", padding: "1rem" }}>
      <CardMedia
        sx={{
          width: "9rem",
          height: "8rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={image}
          sx={{
            maxWidth: "10rem",
            maxHeight: "15rem",
            boxShadow: 3,
            mx: "auto",
          }}
        ></Box>
      </CardMedia>
      <CardContent sx={{ flexGrow: "1" }}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body1" display="block">
          $ {price}
        </Typography>
        <Typography variant="caption" display="block">
          Cantidad: {quantity}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          aria-label="delete"
          color="warning"
          sx={{ width: "100%" }}
          onClick={() => removeFromCart(id)}
        >
          <ClearSharp />
        </IconButton>
      </CardActions>
    </Card>
  );
};
