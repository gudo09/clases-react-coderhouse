import {CartWidget} from "../common"


export const Navbar = ()=> {

  return (
    <nav>
      <h3>Tienda de videojuegos</h3>

      <ul>
        <li>Consolas
          <ul>
            <li><a href="#">Nintendo Switch</a></li>
            <li><a href="#">Playstation 5</a></li>
            <li><a href="#">Xbox Series</a></li>
          </ul>
        </li>
        <li><a href="">PC</a></li>
      </ul>

      <h4>Carrito de compras</h4>
      <CartWidget />
    </nav>
  )
}