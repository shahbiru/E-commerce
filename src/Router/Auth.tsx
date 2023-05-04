import {
  Navigate,
} from "react-router-dom";

export const RequireAuth: any = ({ children, redirectTo }: any) => {
  const isAuthenticated = localStorage.getItem("user") ? true : false;
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to={{ pathname: redirectTo }} />
  );
};

export const OnlyPublicAuth: any = ({ children, redirectTo }: any) => {
  const isAuthenticated = localStorage.getItem("user") ? true : false;
  return !isAuthenticated ? (
    children
  ) : (
    <Navigate to={{ pathname: redirectTo }} />
  );
};
