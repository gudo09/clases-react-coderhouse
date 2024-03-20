import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";

import { LoadingProductos } from "../../common/LoadingProductos";
import { useParams } from "react-router";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { ItemListEmpty } from "./ItemListEmpty";

export const ItemListContainer = () => {
  //creamos un estado para almacenar el arreglo de productos
  const [items, setItems] = useState([]);
  //y otro para indicar que se está cargando mientras la petición se resuelve
  const [isLoading, setIsLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    //dentro del useEffect ponemos la solicitud y la manipulación de la promesa
    setIsLoading(true);

    //accedo a la coleccion "products" de la base de datos
    let productsCollection = collection(db, "products");

    //si estoy en una categoria aplico filtro
    category && (productsCollection = filterByCategory(productsCollection));

    getData(productsCollection);
  }, [category]);

  const filterByCategory = (productsCollection) => {
    let productsCollectionFiltered = query(
      productsCollection,
      where("category", "==", category)
    );
    return productsCollectionFiltered;
  };

  const getData = async (productsCollection) => {
    try {
      let result = await getDocs(productsCollection);
      unstructer(result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const unstructer = (data) => {
    //creo un nuevo arreglo con el id y el resto de la info para despues actualizar el estado items
    let unstructuredCollection = data.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    setItems(unstructuredCollection);
  };

  const categoryToSring = (cat) => {
    if (category) {
      let spaceRemoved = cat.replace("-", " ");
      return capitalizeEachWord(spaceRemoved);
    }
  };

  const capitalizeEachWord = (text) => {
    if (text === "pc") return "PC";
    return text.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <>
      {
        isLoading ? (
          <LoadingProductos />
        ) : items.length > 0 ? (
          <ItemList items={items} textCategory={categoryToSring(category)} />
        ) : (
          <ItemListEmpty />
        ) //monto el componente en el segundo renderizado porque en el primero el estado items es un arreglo vacío y da error
      }
    </>
  );
};
