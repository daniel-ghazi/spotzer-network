import { Outlet } from "react-router-dom";
import Header from "./common-components/layout/Header";
import Sidebar from "./common-components/layout/Sidebar";

function App() {
  return (
    <div className="m-12">
      <Header />
      <div className="mt-8 flex">
        <Sidebar />
        <main className="size-full mt-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
