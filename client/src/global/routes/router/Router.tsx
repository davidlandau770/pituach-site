import { Route, Routes } from "react-router-dom";
import ROUTES from "../model/routes.model";
import Portfolio from "../../../components/Portfolio";

const Router = () => {
  console.log("Router loaded");

  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<Portfolio />} />
    </Routes>
  );
};
export default Router;
