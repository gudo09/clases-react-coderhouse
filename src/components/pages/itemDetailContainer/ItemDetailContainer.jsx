import { useParams, useNavigate } from "react-router";
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

  //useNavigate devuelve una funcion
  const navigate = useNavigate()

  useEffect(() => {
    //el signo + antes del id lo convierte en number
    getProduct(+id).then((resp) => {
      setItem(resp);
      setIsLoading(false);
    });
  }, []);
  const onAdd = (quantity) => {
    const infoProduct = { ...item, quantity };
    console.log(infoProduct);
    navigate("/cart")
  };

  //mientras espera los resultados de la solicitud muestro un loading
  return (
    <>
      {isLoading ? (
        <LoadingProductos />
      ) : (
        <ItemDetail item={{ ...item }} onAdd={onAdd} />
      )}
    </>
  );
};
