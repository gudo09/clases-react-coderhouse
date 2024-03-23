import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Box } from "@mui/material";

export const Layout = () => {
  return (
    <Box minHeight="100vh" display="grid" gridTemplateRows="auto 1fr auto">
      <Navbar />
      <Outlet />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </Box>
    </Box>
  );
};
