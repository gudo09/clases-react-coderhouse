import { useState } from "react";
import { Checkout } from "./Checkout";

export const CheckoutContainer = () => {
  const [user, setUser] = useState({
    name: "",
    lastName: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleUser = (e) => {
    {
      /*Para acceder a las propiedades que trae el e.target.name lo tengo que pasar entre [] debido a que es string*/
    }
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return <Checkout handleSubmit={handleSubmit} handleUser={handleUser} />;
};
