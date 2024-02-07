import './App.css'
import { Navbar } from './components/layout/Navbar'
import { ItemListContainer } from './components/pages/itemListContainer/ItemListContainer'



const App = ()=> {

  return (
    <div>
      <Navbar />

      <ItemListContainer/> 
    </div>
  )
}

export default App
