import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./components/context/CartContext";
import { AppRouter } from "./routes/AppRouter";
import { theme } from "./components/themes/customTheme";

document.body.style.backgroundColor="#f9fafa";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {/*Reseteo los estilos de CSS con el componente CssBaseline de Material UI*/}
          <CssBaseline />

          <CartContextProvider>
            <AppRouter />
          </CartContextProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};
