import { Button, Container } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { products } from "../../productsMock";

export const UploadDocs = () => {
  const fillDb = () => {
    let productsCollection = collection(db, "products");
    products.forEach((product) => addDoc(productsCollection, product));
  };
  return (
    <Container fixed>
      <Button variant="contained" sx={{ mb: "2rem" }} onClick={fillDb}>
        Agregar documentos
      </Button>
    </Container>
  );
};
