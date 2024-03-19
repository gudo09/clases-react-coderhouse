import { useContext, useState } from "react";
import { Checkout } from "./Checkout";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

export const CheckoutContainer = () => {
  const { cart, cartTotalPrice, clearCart } = useContext(CartContext);

  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    let order = {
      buyer: user,
      items: cart,
      total: cartTotalPrice(),
    };

    let orderCollection = collection(db, "orders");

    addOrder(orderCollection, order);
    subtractPurchaseFromStock();
    clearCart()
  };

  const addOrder = async (orderCollection, order) => {
    let res = await addDoc(orderCollection, order);
    setOrderId(res.id);
    setIsLoading(false);
  };

  const subtractPurchaseFromStock = () =>{
    cart.forEach(({id, quantity, stock}) => {
      let refDoc=doc(db, "products", id)
      updateDoc(refDoc, {stock: stock - quantity })
    });
  } 

  const handleUser = (e) => {
    {
      /*Para acceder a las propiedades que trae el e.target.name lo tengo que pasar entre [] debido a que es string*/
    }
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Checkout
      orderId={orderId}
      isLoading={isLoading}
      handleSubmit={handleSubmit}
      handleUser={handleUser}
    />
  );
};
