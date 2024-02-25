import { CssBaseline } from "@mui/material";
import { Navbar } from "./components/layout/Navbar";
import { ItemDetailContainer, ItemListContainer } from "./components/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./components/common";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        {/*Reseteo los estilos de CSS con el componente CssBaseline de Material UI*/}
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
