import { Routes, Route } from "react-router-dom";
import Home from "../views/Home/Home";
import Dashboard from "../views/Dashboard/Dashboard";
import UserList from "../components/User/UserList";
import Cart from "../components/Cart/Cart";
import NotFound from "../components/NotFound";
import Product from "../views/Product/Product";

const RenderAllModule = () => {
  const routes = [
    {
      path: "/home",
      element: <Product />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/user",
      element: <UserList />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "*",
      element: <NotFound/>,
    },
    {
      path: "/",
      element: <Product />,
    },
  ];

  const renderRoutes = () => {
    let routesComponents = [];
    for (let route of routes) {
      routesComponents.push(
        <Route path={route.path} element={route.element} />
      );
    }
    return routesComponents;
  };

  return (
    <div>
      <Routes>{renderRoutes()}</Routes>
    </div>
  );
};

export default RenderAllModule;
