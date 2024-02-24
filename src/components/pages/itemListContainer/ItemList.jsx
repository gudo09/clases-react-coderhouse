import { ProductCard } from "../../common";
import Grid from "@mui/material/Grid";

export const ItemList = ({ items }) => {
  //console.log( items ) // uso console.log para testear que se pasen bien las props
  return (
    <>
      <Grid container sx={{ mx: "auto" }} columnGap={4} rowGap={4}>
        {/* Map desestructurando */}
        {items.map(({ id, title, image, description, price, stock }) => {
          return (
            <Grid item key={id}>
              <ProductCard
                key={id}
                title={title}
                image={image}
                description={description}
                price={price}
                stock={stock}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
