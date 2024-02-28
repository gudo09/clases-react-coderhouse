import { Link } from "react-router-dom";
import { CartWidget } from "../common";
import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Toolbar,
  Typography,
} from "@mui/material";

export const Navbar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Button
            variant="outlined"
            component={Link}
            to={"/"}
            sx={{ color: "white" }}
          >
            <Typography variant="h6"> Tienda de videojuegos</Typography>
          </Button>
          <Box>
            Plataformas:
            <ButtonGroup variant="contained" sx={{ ml: 2 }}>
              <Button component={Link} to={"/category/nintendo-switch"}>
                Nintendo Switch
              </Button>
              <Button component={Link} to={"/category/xbox-series"}>
                Xbox Series
              </Button>
              <Button component={Link} to={"/category/playstation-5"}>
                Playstation 5
              </Button>
              <Button component={Link} to={"/category/pc"}>
                PC
              </Button>
            </ButtonGroup>
          </Box>
          <Box>
            <CartWidget />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
