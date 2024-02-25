import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import { ItemCountContainer } from "../../common";

export const ItemDetail = ({ name, description, image, price, stock }) => {
  return (
    <Card>
      <CardContent>
        <CardMedia>
          <h5 className="card-title">{name}</h5>
          <img src={image} alt="" />
          <p className="card-text"> {description} </p>
          <p>Precio: {price} </p>
        </CardMedia>
      </CardContent>

      <CardActions>
        <ItemCountContainer stock={stock} />
      </CardActions>
    </Card>
  );
};
