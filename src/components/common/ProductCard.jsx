//rafc para usar el snippet para crear componentes

const ProductCard = ( {titulo, desc, precio} ) => { //tambien puedo desestructurarlo desde acá

  //const {titulo, desc, precio} = prop //desestructuro para no estar usando prop.precio, etc.
  return (
    <div style={{border: "2px solid black"}}>
      <h4>{titulo}</h4>
      <h3>{desc}</h3>
      <h3>{precio}</h3>
    </div>
  )
}

export default ProductCard
