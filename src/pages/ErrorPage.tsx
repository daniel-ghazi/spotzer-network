import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>404 Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="text-purple-800 underline underline-offset-4">
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
