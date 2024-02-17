import routePaths from "../../routing/routePaths";
import Link from "../common/Link";

const Sidebar = () => {
  return (
    <aside aria-label="Main navigation" className="w-64 p-4">
      <nav>
        <ul>
          <li>
            <Link to={routePaths.LOGIN} ariaLabel="Navigate to login page">
              Login
            </Link>
          </li>
          <li>
            <Link to={routePaths.HOME} ariaLabel="Navigate to home page">
              Home Page
            </Link>
          </li>
          <li>
            <Link to={routePaths.HISTORY} ariaLabel="Navigate to history page">
              History
            </Link>
          </li>
          <li>
            <Link to={routePaths.INVOICE} ariaLabel="Navigate to invoice page">
              Invoice
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
