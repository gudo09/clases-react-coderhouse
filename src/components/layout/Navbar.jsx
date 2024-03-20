import { Link } from "react-router-dom";
import { CartWidget } from "../common";
import {
  AppBar,
  Box,
  ButtonGroup,
  IconButton,
  Toolbar,
} from "@mui/material";
import { menuNavigation } from "../../routes/menuNavigation";

export const Navbar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            disableRipple
            variant="outlined"
            component={Link}
            to={"/"}
            sx={{ color: "white" }}
          >
            <img src="../../logo.png" style={{ width: "90px" }} />
          </IconButton>
          <Box>
            Plataformas:
            <ButtonGroup variant="contained" sx={{ ml: 2 }}>
              {menuNavigation.map(({ id, Element, path, categoryName }) => (
                <Element key={id} to={path} categoryName={categoryName} />
              ))}
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
