import { useState } from "react"

const Counter = () => {
  //const x = useState()
  //console.log(x) // [variable, funcion]

  const [contador, setContador] = useState(120) // [variable, funcion]
  
  //console.log(contador)
  //console.log(setContador)
  

  // let contador = 0 //no se hace de esta manera en react, se usan estados

  const sumar = ()=> {
    setContador( contador + 1 ) //no se usa ni contador++ ni contador =+ 1 ya que la funcion del estado es la que se encarga de la suma
  }

  const restar = ()=> {
    setContador( contador - 1 ) 
  }

  return (
    <div>
      <button onClick={ sumar }>Sumar</button>
      <h4> {contador} </h4>
      <button onClick={ restar }>Restar</button>
    </div>
  )
}

export default Counter