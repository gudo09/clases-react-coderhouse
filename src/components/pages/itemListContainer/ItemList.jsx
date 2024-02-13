import ProductCard from "../../common/ProductCard";
import Grid from "@mui/material/Grid";

const ItemList = ({ items }) => {
  //console.log( items ) // uso console.log para testear que se pasen bien las props
  return (
    <Grid container 
      sx={{mx:'auto'}}
      columnGap={4}
      rowGap={4}>
      {/* <div style={{ border: "solid black" }}>
        <img src={items[0].image} alt="" />
        <h2>{items[0].title}</h2>
        <h3>{items[0].description}</h3>
        <h3>{items[0].price}</h3>
      </div> */}

      {/* Método 1 */}
      {/* 
      {items.map((item) => {
        return (
          <ProductCard 
            key={item.id}
            image={item.image}
            description={item.description}
            price={item.price} 
          />
        );
      })}
      */}
      {/* Método 2 - Desestructurando */}
      {items.map(({ id, title, image, description, price }) => {
        return (
          <Grid item key={id} >
            
            <ProductCard
              key={id}
              title={title}
              image={image}
              description={description}
              price={price}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default ItemList;
