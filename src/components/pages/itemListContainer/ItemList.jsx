import { Box, Container } from "@mui/material";
import { ProductCard } from "../../common";

export const ItemList = ({ items }) => {
  //console.log( items ) // uso console.log para testear que se pasen bien las props
  return (
    <Container maxWidth="xl" sx={{ mt: "2rem" }}>
      <Box
        display="grid"
        gridTemplateColumns={{ xl: "repeat(4, 1fr)", md: "repeat(3, 1fr)" }}
        gap={4}
        sx={{ backgroundColor: "blue" }}
      >
        {/* Map desestructurando */}
        {items.map(({ id, title, image, description, price, stock }) => {
          return (
            <ProductCard
              key={id}
              id={id}
              title={title}
              image={image}
              description={description}
              price={price}
              stock={stock}
            />
          );
        })}
      </Box>
    </Container>
  );
};
