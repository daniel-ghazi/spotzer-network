import { Route, Routes } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import HistoryPage from "../pages/HistoryPage";
import HomePage from "../pages/HomePage";
import InvoicePage from "../pages/InvoicePage";
import LoginPage from "../pages/LoginPage";
import ROUTE_PATHS from "./routePaths";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route path={ROUTE_PATHS.LOGIN} element={<LoginPage />} />
      <Route element={<PrivateRoute />}>
        <Route path={ROUTE_PATHS.HOME} element={<HomePage />} />
        <Route path={ROUTE_PATHS.HISTORY} element={<HistoryPage />} />
        <Route path={ROUTE_PATHS.INVOICE} element={<InvoicePage />} />
      </Route>
    </Route>

    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default AppRoutes;
