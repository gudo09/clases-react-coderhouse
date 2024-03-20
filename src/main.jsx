import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
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
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
