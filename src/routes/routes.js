import { CartContainer, CheckoutContainer, ItemDetailContainer, ItemListContainer } from "../components/pages";

export const routes = [
  { id: 1, path: "/", Element: ItemListContainer },
  { id: 2, path: "/cart", Element: CartContainer },
  { id: 3, path: "/checkout", Element: CheckoutContainer },
  { id: 4, path: "/item/:id", Element: ItemDetailContainer },
  { id: 5, path: "/category/:category", Element: ItemListContainer },
];
