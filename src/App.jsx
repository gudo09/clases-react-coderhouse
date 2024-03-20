import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./components/context/CartContext";
import { AppRouter } from "./routes/AppRouter";


export const App = () => {
  return (
    <>
      <BrowserRouter>

        {/*Reseteo los estilos de CSS con el componente CssBaseline de Material UI*/}
        <CssBaseline />

        <CartContextProvider>
          <AppRouter />
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
};
