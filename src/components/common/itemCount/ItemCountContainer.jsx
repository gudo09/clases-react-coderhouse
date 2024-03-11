import { ItemCount } from "./ItemCount";
import { useCount } from "../../hooks";

export const ItemCountContainer = ({ stock, onAdd, initial = 1 }) => {
  //uso el custom hook
  const { count, increment, decrement } = useCount(initial);

  const addOne = () => {
    if (count < stock) {
      increment();
    } else {
      alert("stock maximo");
    }
  };

  const subOne = () => {
    if (count > 1) {
      decrement();
    } else {
      alert("no puede ser menos de 1");
    }
  };

  return (
    <ItemCount
      counter={count}
      addOne={addOne}
      subOne={subOne}
      stock={stock}
      onAdd={onAdd}
    />
  );
};
