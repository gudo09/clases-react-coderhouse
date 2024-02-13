import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { products } from "../../../productsMock";


export const ItemListContainer = () => {
  // todos los useEffect se ejecutan despues del montaje del componente

  //creamos un estado para almacenar el arreglo de productos
  const [items, setItems] = useState([]);

  //dentro del useEffect ponemos la solicitud y la manipulación de la promesa
  useEffect(() => {
    // creamos o solicitamos
    const tarea = new Promise((resolve /*, reject*/) => {
      resolve(products);
      //reject("ERROR: Sin autorización")
    });

    // manipulamos la promesa
    //tarea.then( (res)=>{} ).catch( (error)=>{} )
    tarea
      .then((res) => {
        setItems(res); // promesa resuelta del resolve
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //console.log(items);

  //console.log("se actualiza el componente");
  return (
    <>
      {
        items.length > 0 && <ItemList items={items} /> //monto el componente en el segundo renderizado porque en el primero el estado items es un arreglo vacío y da error
      }
    </>
  );
};
