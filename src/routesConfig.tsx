import { Route, Routes } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import HistoryPage from "./pages/HistoryPage";
import HomePage from "./pages/HomePage";
import InvoicePage from "./pages/InvoicePage";
import LoginPage from "./pages/LoginPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="history" element={<HistoryPage />} />
      <Route path="invoice" element={<InvoicePage />} />
    </Route>

    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default AppRoutes;
