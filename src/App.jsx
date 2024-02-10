import './App.css'
import { Navbar } from './components/layout/Navbar'
import { ItemListContainer } from './components/pages/itemListContainer/ItemListContainer'



const App = ()=> {

  return (
    <div>
      <Navbar />

      <ItemListContainer greeting={"Hola 👋🏼 (esto es un saludo !)"}/> 
    </div>
  )
}

export default App
