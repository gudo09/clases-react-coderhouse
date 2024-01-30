import "./Navbar.css"

export const Navbar = () => { // export para poder usarlo en otro archivo jsx
  return <nav>
    <ul>
      <li className="bulletPoint">Productos</li>
      <li>Servicios</li>
      <li>Contacto</li>
    </ul>
  </nav>
}