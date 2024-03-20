import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout";
import { routes } from "./routes";
import { NotFound404 } from "../components/pages";
//import { FormFormik } from "./components/common";

export const AppRouter = () => {
  return (
    <Routes>
      {/*Layout para mostrar el navbar y el footer siempre*/}
      <Route element={<Layout />}>
        {routes.map(({ Element, path, id }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
        {/* rutas de prueba */}
        {/* <Route path="/formik" element={<FormFormik />} /> */}
      </Route>
      {/* rutas por defecto */}
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
};
