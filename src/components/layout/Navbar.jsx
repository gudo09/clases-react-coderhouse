import { Link } from "react-router-dom";
import { CartWidget } from "../common";
import { Button } from "@mui/material";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <h3>Tienda de videojuegos</h3>
      </Link>

      <ul>
        <li>
          Consolas
          <ul>
            <Link to="/category/nintendo-switch">
              <Button>Nintendo Switch</Button>
            </Link>
            <Link to="/category/playstation-5">
              <Button>Playstation 5</Button>
            </Link>
            <Link to="/category/xbox-series">
              <Button>Xbox Series</Button>
            </Link>
          </ul>
        </li>
        <li>
          <Link to="/category/pc">
            <Button>PC</Button>
          </Link>
        </li>
      </ul>

      <Link to="/cart">
        <h4>Carrito de compras</h4>
        <CartWidget />
      </Link>
    </nav>
  );
};
