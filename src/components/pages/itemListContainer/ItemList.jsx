import { Container, Typography } from "@mui/material";
import { ProductCard } from "../../common";

export const ItemList = ({ items, textCategory }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: "2rem",
        display: "grid",
        gridTemplateColumns: { xl: "repeat(4, 1fr)", md: "repeat(3, 1fr)" },
        gridTemplateRows: "1.5rem auto",
        gap: 4,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          gridColumn: "1 / -1",
          gridRow: "auto",
          maxHeight: "2rem",
          textAlign: "center",
        }}
      >
        {textCategory
          ? "Videojuegos de " + textCategory
          : "Todos nuestros juegos"}
      </Typography>
      {/* Descomentar e importar para cargar productos desde el mock a firebase*/}
      {/* <UploadDocs /> */}
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
    </Container>
  );
};
