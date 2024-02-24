import { CssBaseline } from "@mui/material";
import "./App.css";
import { Navbar } from "./components/layout/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";


export const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />

      <ItemListContainer greeting={"Hola 👋🏼 (esto es un saludo !)"} />
    </>
  );
};
