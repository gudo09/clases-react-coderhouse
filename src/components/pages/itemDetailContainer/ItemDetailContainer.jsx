import { useParams, useNavigate } from "react-router";
import { ItemDetail } from "./ItemDetail";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { LoadingProductos } from "../../common";
import { CartContext } from "../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  //el siguiente param id se usa para acceder a la ruta /item/:id
  const { id } = useParams();
  //useParams retorna un string

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //useNavigate devuelve una funcion
  const navigate = useNavigate();

  const { addToCart, cartCountById } = useContext(CartContext);

  useEffect(() => {
    //obtengo la colección (tabla en SQL)
    let productsCollection = collection(db, "products");

    //referenciamos al documento (registro en SQL), diciendole en qué colección buscar y qué id buscar
    let refDoc = doc(productsCollection, id);

    getData(refDoc);
  }, [id]);

  const getData = async (refDoc) => {
    try {
      let res = await getDoc(refDoc);
      //seteo el item con un objeto que contenga el id y lo que tenga en data desencriptandolo con el metodo data()
      setItem({ ...res.data(), id });
    } finally {
      setIsLoading(false);
    }
  };

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
        <ItemDetail
          item={{ ...item }}
          onAdd={onAdd}
          initial={cartCountById(id)}
        />
      )}
    </>
  );
};
