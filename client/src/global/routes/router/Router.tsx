import { Navigate, Route, Routes } from "react-router-dom";
import ROUTES from "../model/routes.model";
import PrivateRoute from "../components/PrivateRoute";

const Router = () => {
  return (
    <Routes>
      {/* <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} /> */}

      <Route path={ROUTES.ROOT} element={<PrivateRoute />}>
        <Route index element={<Navigate to={ROUTES.ROOT} replace />} />
        {/* <Route path={ROUTES.LOGOUT} element={<LogoutPage />} /> */}
      </Route>
    </Routes>
  );
};

export default Router;
