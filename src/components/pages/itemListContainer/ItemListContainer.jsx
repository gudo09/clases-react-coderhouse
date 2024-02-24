import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { products } from "../../../productsMock";

export const ItemListContainer = () => {
  //todos los useEffect se ejecutan despues del montaje del componente

  //creamos un estado para almacenar el arreglo de productos
  const [items, setItems] = useState([]);

  //dentro del useEffect ponemos la solicitud y la manipulación de la promesa
  useEffect(() => {
    // creamos o solicitamos
    const getProducts = new Promise((resolve , reject) => {
      resolve(products);
      reject("ERROR: Sin autorización")
    });

    // manipulamos la promesa
    //getProducts.then( (res)=>{} ).catch( (error)=>{} )
    getProducts
      .then((res) => {
        setItems(res); // promesa resuelta del resolve
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  return (
    <>
      {
        items.length > 0 && <ItemList items={items} /> //monto el componente en el segundo renderizado porque en el primero el estado items es un arreglo vacío y da error
      }
    </>
  );
};
