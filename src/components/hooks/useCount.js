import { useState } from "react";

// declaro initial con valor con
export const useCount = (initial) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(initial);
  };

  //exporto un objeto con todos los elementos
  return {
    count,
    increment,
    decrement,
    reset,
  };
};
