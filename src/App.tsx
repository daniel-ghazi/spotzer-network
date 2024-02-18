import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import ROUTE_PATHS from "./routing/routePaths";

function App() {
  const location = useLocation();
  const isPrivateRoute = location.pathname !== ROUTE_PATHS.LOGIN;

  return (
    <div className="m-12 min-w-[640px]">
      <Header />
      <div className="mt-8 flex">
        {isPrivateRoute && <Sidebar />}
        <main className="size-full mt-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
