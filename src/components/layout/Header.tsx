import classNames from "classnames";
import ROUTE_PATHS from "../../routing/routePaths";
import logo from "/src/assets/logo.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === ROUTE_PATHS.LOGIN;

  return (
    <header>
      <Link
        to={ROUTE_PATHS.HOME}
        aria-label="Go to home page"
        className={classNames("flex items-center p-4", {
          "pointer-events-none": isLoginPage,
        })}
      >
        <img src={logo} className="w-16 h-16 mr-4" alt="Spotzer Network Logo" />
        <h1 className="text-3xl">Spotzer Network</h1>
      </Link>
    </header>
  );
};

export default Header;
