import './App.css'
import { useState } from 'react'
import { Navbar } from './components/layout/Navbar'
import { ItemListContainer } from './components/pages/ItemListContainer'
import Counter from "./components/common/Counter"


const App = ()=> {
  const [modoOscuro, setModoOscuro] = useState(false)
  //let modoOscuro = false //no se hace de esta manera en react, se usan estados
  console.log(modoOscuro)
  const cambiarModo = ()=> {
    setModoOscuro( !modoOscuro )
  }


  return (
    <div>
      <button onClick={ cambiarModo }>Cambiar a modo oscuro</button>
      <Navbar />

      <ItemListContainer /> 

      <Counter />
    </div>
  )
}

export default App
