import ROUTE_PATHS from "../../routing/routePaths";
import Link from "../common/Link";

const links = [
  {
    label: "Home Page",
    path: ROUTE_PATHS.HOME,
    ariaLabel: "Navigate to home page",
  },
  {
    label: "History",
    path: ROUTE_PATHS.HISTORY,
    ariaLabel: "Navigate to history page",
  },
  {
    label: "Invoice",
    path: ROUTE_PATHS.INVOICE,
    ariaLabel: "Navigate to invoice page",
  },
];

const Sidebar = () => {
  return (
    <aside aria-label="Main navigation" className="min-w-32 p-4 border mr-8">
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.path} ariaLabel={link.ariaLabel}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
