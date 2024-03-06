import { CssBaseline } from "@mui/material";

import { ItemDetailContainer, ItemListContainer, NotFound404 } from "./components/pages";
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
          {/*Layout para mostrar el navbar y el footer siempre*/}
          <Route element={<Layout />}>
            {/* rutas estaticas */}`
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            {/* rutas dinamicas */}
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
          </Route>
          {/* rutas por defecto */}
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
