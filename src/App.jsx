import { CssBaseline } from "@mui/material";
import "./App.css";
import { Navbar } from "./components/layout/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";


const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />

      <ItemListContainer greeting={"Hola 👋🏼 (esto es un saludo !)"} />
    </>
  );
};

export default App;
