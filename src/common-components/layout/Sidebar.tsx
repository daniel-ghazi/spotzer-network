import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside aria-label="Main navigation" className="w-64 p-4">
      <nav>
        <ul>
          <li>
            <Link to="/login" aria-label="Navigate to login page">
              Login
            </Link>
          </li>
          <li>
            <Link to="/" aria-label="Navigate to home page">
              Home Page
            </Link>
          </li>
          <li>
            <Link to="/history" aria-label="Navigate to history page">
              History
            </Link>
          </li>
          <li>
            <Link to="/invoice" aria-label="Navigate to invoice page">
              Invoice
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
