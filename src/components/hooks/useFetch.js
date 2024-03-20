import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
  });

  const getData = async () => {
    // seteo isloading como true para indicar que está esperando la respuesta de la peticion
    setState({
      ...state,
      isLoading: true,
    });

    const res = await fetch(url);

    const resData = await res.json();

    setState({
      data: resData,
      isLoading: false,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data: state.data,
    isLoading: state.isLoading,
  };
};
