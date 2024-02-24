import { ItemCount } from "./ItemCount";
import { useCount } from "../../hooks/useCount";

export const ItemCountContainer = ({ stock }) => {
  //uso el custom hook
  const { count, increment, decrement } = useCount(1);

  const addOne = () => {
    if (count < stock) {
      increment();
      console.log(count);
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

  return <ItemCount counter={count} addOne={addOne} subOne={subOne} stock={stock} />;
};
