import CartWidget from "../common/CartWidget"

//exportacion nombrada (para exportar más de una cosa)
export const Navbar = ()=> {

  return (
    <nav>
      <h3>Logo</h3>

      <ul>
        <li>Todas</li>
        <li>Deportivas</li>
        <li>Urbanas</li>
      </ul>

      <h4>Carrito</h4>
      <CartWidget />
    </nav>
  )
}

//export default Navbar //exportacion por defecto (para exportar sólo una cosa)