import { Navigate, Outlet } from "react-router-dom";
import ROUTE_PATHS from "./routePaths";
import useAuthentication from "../features/AuthenticationForm/hooks/useAuthentication";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuthentication();

  return isAuthenticated() ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTE_PATHS.LOGIN} replace />
  );
};

export default PrivateRoute;
