import { useParams, useNavigate } from "react-router";
import { ItemDetail } from "./ItemDetail";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { getProduct } from "../../../productsMock";
import { LoadingProductos } from "../../common";
import { CartContext } from "../../context/CartContext";

export const ItemDetailContainer = () => {
  //el siguiente param id se usa para acceder a la ruta /item/:id
  const { id } = useParams();
  //useParams retorna un string

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //useNavigate devuelve una funcion
  const navigate = useNavigate();

  const { addToCart, isInCart } = useContext(CartContext);

  useEffect(() => {
    //el signo + antes del id lo convierte en number
    getProduct(+id).then((resp) => {
      setItem(resp);
      setIsLoading(false);
    });
  }, [id]);

  const onAdd = (quantity) => {
    const infoProduct = { ...item, quantity };
    addToCart(infoProduct);
    navigate("/cart");
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
