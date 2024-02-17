import ROUTE_PATHS from "../../routing/routePaths";
import Link from "../common/Link";

const Sidebar = () => {
  return (
    <aside aria-label="Main navigation" className="min-w-32 p-4">
      <nav>
        <ul>
          <li>
            <Link to={ROUTE_PATHS.LOGIN} ariaLabel="Navigate to login page">
              Login
            </Link>
          </li>
          <li>
            <Link to={ROUTE_PATHS.HOME} ariaLabel="Navigate to home page">
              Home Page
            </Link>
          </li>
          <li>
            <Link to={ROUTE_PATHS.HISTORY} ariaLabel="Navigate to history page">
              History
            </Link>
          </li>
          <li>
            <Link to={ROUTE_PATHS.INVOICE} ariaLabel="Navigate to invoice page">
              Invoice
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
