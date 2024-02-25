import { useParams } from "react-router";
import { ItemDetail } from "./ItemDetail";
import { useState } from "react";
import { useEffect } from "react";
import { getProduct } from "../../../productsMock";
import { LoadingProductos } from "../../common";

export const ItemDetailContainer = () => {
  //el siguiente param id se usa para acceder a la ruta /item/:id
  const { id } = useParams();
  //useParams retorna un string

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProduct(id).then((resp) => {
      setItem(resp);
      setIsLoading(false);
    });
  }, []);

  return <>{isLoading ? <LoadingProductos /> : <ItemDetail {...item} />}</>;
};
