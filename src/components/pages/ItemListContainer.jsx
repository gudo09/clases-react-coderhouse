import ProductCard from "../common/ProductCard"

export const ItemListContainer = ()=> {
  return(
    <div>
      <h2>Acá van los productos</h2>
      <ProductCard titulo={"nike"} desc={"son las mejores zapas"} precio={120}/>
      <ProductCard titulo={"adidas"} desc={"son mejores que las nike"} precio={130}/>
      <ProductCard titulo={"puma"} desc={"estas zapas zafan"} precio={100}/>
    </div>
  )
}
