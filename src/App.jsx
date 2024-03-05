import { CssBaseline } from "@mui/material";

import { ItemDetailContainer, ItemListContainer } from "./components/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./components/common";
import { Layout } from "./components/layout";


export const App = () => {
  return (
    <>
      <BrowserRouter>
        {/*Reseteo los estilos de CSS con el componente CssBaseline de Material UI*/}
        <CssBaseline />

        <Routes>
          <Route element={<Layout />}>
            {/* rutas estaticas */}`
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            {/* rutas dinamicas */}
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
