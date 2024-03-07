import { CssBaseline } from "@mui/material";

import {
  CartContainer,
  ItemDetailContainer,
  ItemListContainer,
  NotFound404,
} from "./components/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { CheckoutContainer } from "./components/pages/checkout/CheckoutContainer";
import { CartContextProvider } from "./components/context/CartContext";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        {/*Reseteo los estilos de CSS con el componente CssBaseline de Material UI*/}
        <CssBaseline />

        <CartContextProvider>
          <Routes>
            {/*Layout para mostrar el navbar y el footer siempre*/}
            <Route element={<Layout />}>
              {/* rutas estaticas */}`
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/checkout" element={<CheckoutContainer />} />
              {/* rutas dinamicas */}
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route
                path="/category/:category"
                element={<ItemListContainer />}
              />
            </Route>
            {/* rutas por defecto */}
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
};
