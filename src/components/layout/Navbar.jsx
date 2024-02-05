import CartWidget from "../common/CartWidget"

//exportacion nombrada (para exportar más de una cosa)
export const Navbar = ()=> {

  return (
    <nav>
      <h3>Tienda de videojuegos</h3>

      <ul>
        <li>Consolas
          <ul>
            <li>Nintendo Switch</li>
            <li>Playstation 5</li>
            <li>Xbox Series</li>
          </ul>
        </li>
        <li>PC</li>
      </ul>

      <h4>Carrito de compras</h4>
      <CartWidget />
    </nav>
  )
}

//export default Navbar //exportacion por defecto (para exportar sólo una cosa)