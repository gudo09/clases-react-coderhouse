import { Link } from "react-router-dom";
import { CartWidget } from "../common";
import {
  AppBar,
  Box,
  ButtonGroup,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { menuNavigation } from "../../routes/menuNavigation";

export const Navbar = () => {
  return (
    <Box
      sx={{
        m: "0.5rem",
        mb: "2rem",
        borderRadius: "30px",
        overflow: "hidden",
      }}
    >
      <AppBar position="static" sx={{ p: "0.3rem 1rem" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            disableRipple
            variant="outlined"
            component={Link}
            to={"/"}
            sx={{ color: "white" }}
          >
            <img
              src="../../logo.png"
              style={{
                width: "50px",

                filter: "drop-shadow(5px 5px 7px rgba(0, 0, 0, 0.50))",
              }}
            />
            <Typography
              variant="h5"
              fontWeight={900}
              ml={1}
              sx={{ textShadow: "5px 5px 10px rgba(0, 0, 0, 0.50)" }}
            >
              Monkey Games
            </Typography>
          </IconButton>
          <Box>
            Plataformas:
            <ButtonGroup variant="contained" sx={{ ml: 2 }}>
              {menuNavigation.map(({ id, Element, path, categoryName }) => (
                <Element key={id} to={path} categoryName={categoryName} />
              ))}
            </ButtonGroup>
          </Box>
          {/*//acá iría el boton de tema oscuro
              <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              */}
          <Box>
            <CartWidget />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
