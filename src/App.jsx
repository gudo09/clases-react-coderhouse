import "./App.css"
import { Navbar } from "./Navbar.jsx" //importo el componente
import { Footer } from "./Footer.jsx"
import bandera from "./images/descarga.png"

const App = ()=> {

  return (
    <>
      <Navbar /> {/* Sintaxis para llamar a un componente */}
      {/* <h1 style={ {color: "steelblue", fontSize: "3rem"} }>Esto es un título</h1> */}
      <h1 className="title">Esto es un título</h1>
      <h2>un subtitulo</h2>
      <h3>otra cosa</h3>
      <img src={bandera} alt="" />
      <Footer />
    </>
  )
}

export default App
