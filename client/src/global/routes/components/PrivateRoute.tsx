import { Outlet } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar.tsx";

const PrivateRoute = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default PrivateRoute;
