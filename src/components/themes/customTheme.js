import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#703fb5",
    },
    secondary: {
      main: "#118ab5",
    },
    info: {
      main: "#76AB91",
    },
    success: {
      main: "#60ab68",
    },
    warning: {
      main: "#CD1010",
    },
  },
  typography: {
    h6: {
      lineHeight: 1.1,
      fontWeight: 400,
    },
  },
});
