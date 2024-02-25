import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { getProducts } from "../../../productsMock";
import { LoadingProductos } from "../../common/LoadingProductos";
import { useParams } from "react-router";

export const ItemListContainer = () => {
  //creamos un estado para almacenar el arreglo de productos
  const [items, setItems] = useState([]);
  //y otro para indicar que se está cargando mientras la petición se resuelve
  const [isLoading, setIsLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    //dentro del useEffect ponemos la solicitud y la manipulación de la promesa
    setIsLoading(true);

    getProducts().then((resp) => {
      if (category) {
        const productsFilter = resp.filter(
          (product) => product.category === category
        );
        setItems(productsFilter);
      } else {
        setItems(resp);
      }

      setIsLoading(false);
    });
  }, [category]);

  return (
    <>
      {
        isLoading ? (
          <LoadingProductos />
        ) : (
          items.length > 0 && <ItemList items={items} />
        ) //monto el componente en el segundo renderizado porque en el primero el estado items es un arreglo vacío y da error
      }
    </>
  );
};
