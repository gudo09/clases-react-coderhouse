import { CssBaseline } from "@mui/material";
import { Navbar } from "./components/layout/Navbar";
import { ItemListContainer } from "./components/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        {/*Reseteo los estilos de CSS con el componente CssBaseline de Material UI*/}
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
