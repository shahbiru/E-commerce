import { RouteProps } from "react-router-dom";
import Home from "../views/Home/Home";
import Signin from "../views/Signin/Signin";
import Dashboard from "../views/Dashboard/Dashboard";

type Route = {
  path: string;
  component: React.ComponentType<any>;
  exact?: boolean;
  private?: boolean;
  public?: boolean;
} & RouteProps;

const routes: Route[] = [
  {
    path: "/",
    component: Home,
    exact: true,
    public: true,
  },
  {
    path: "/login",
    component: Signin,
    exact: true,
    public: true,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    exact: true,
    private: true,
  },
];

export default routes;
