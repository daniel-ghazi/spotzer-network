import ROUTE_PATHS from "../../routing/routePaths";
import logo from "/src/assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link
        to={ROUTE_PATHS.HOME}
        aria-label="Go to home page"
        className="flex items-center p-4"
      >
        <img src={logo} className="w-16 h-16 mr-4" alt="Spotzer Network Logo" />
        <h1 className="text-3xl">Spotzer Network</h1>
      </Link>
    </header>
  );
};

export default Header;
