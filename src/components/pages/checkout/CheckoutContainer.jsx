import { useContext, useState } from "react";
import { Checkout } from "./Checkout";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { useFormik } from "formik";
import * as Yup from "yup";

export const CheckoutContainer = () => {
  const { cart, cartTotalPrice, clearCart } = useContext(CartContext);

  const [isLoading, setIsLoading] = useState(false);
  const errorsEsp = {
    required: "Campo requerido",
    numeric: "Sólo números",
    phoneLength: "El teléfono debe tener 10 digitos( ej: 0114123123 )",
    email: "Debe ser un e-mail válido",
    confirmEmail: "Los emails no coinciden"
  };

  const { handleChange, handleSubmit, errors } = useFormik({
    validateOnChange: false,
    initialValues: {
      name: "",
      lastName: "",
      phone: "",
      email: "",
      confirmEmail: "",
    },
    onSubmit: (data) => {
      onHandleSubmit(data);
    },
    validationSchema: Yup.object({
      name: Yup.string().required(errorsEsp.required),
      lastName: Yup.string().required(errorsEsp.required),
      phone: Yup.string()
        .required(errorsEsp.required)
        .matches(/^[0-9]+$/, errorsEsp.numeric)
        .length(10, errorsEsp.phoneLength),
      email: Yup.string()
        .required(errorsEsp.required)
        .email(errorsEsp.email),
      confirmEmail: Yup.string()
        .required(errorsEsp.required)
        .oneOf([Yup.ref("email")], errorsEsp.confirmEmail),
    }),
  });

  const [orderId, setOrderId] = useState(null);

  const handleKeyPress = (event) => {
    const regex = /^[0-9]+$/;
    const key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
      event.preventDefault();
    }
  };

  const onHandleSubmit = (data) => {
    setIsLoading(true);
    let order = {
      buyer: data,
      items: cart,
      total: cartTotalPrice(),
    };

    let orderCollection = collection(db, "orders");

    addOrder(orderCollection, order);
    subtractPurchaseFromStock();
    clearCart();
  };

  const addOrder = async (orderCollection, order) => {
    let res = await addDoc(orderCollection, order);
    setOrderId(res.id);
    setIsLoading(false);
  };

  const subtractPurchaseFromStock = () => {
    cart.forEach(({ id, quantity, stock }) => {
      let refDoc = doc(db, "products", id);
      updateDoc(refDoc, { stock: stock - quantity });
    });
  };

  return (
    <Checkout
      orderId={orderId}
      isLoading={isLoading}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
      handleKeyPress={handleKeyPress}
    />
  );
};
