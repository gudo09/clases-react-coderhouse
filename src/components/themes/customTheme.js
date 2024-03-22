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
      main: "#85148c",
    },
    success: {
      main: "#60ab68",
    },
    warning: {
      main: "#ff9800",
    },
  },
  typography: {
    h6: {
      lineHeight: 1.1,
      fontWeight: 400,
    },
  },
});
