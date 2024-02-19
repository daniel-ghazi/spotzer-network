import Input from "../../components/common/Input";
import Link from "../../components/common/Link";
import ROUTE_PATHS from "../../routing/routePaths";
import Button from "../../components/common/Button";
import useAuthentication from "./hooks/useAuthenticationForm";
import { MOCK_USER } from "./mock-data/mockAuthenticationData";

const AuthenticationForm = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    error,
    loading,
    handleLogin,
  } = useAuthentication();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-8 text-gray-400">
        test user credentials: <br />
        {MOCK_USER.username} / {MOCK_USER.password}
      </div>

      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleLogin}
      >
        <Input
          name="username"
          placeholder="Enter your username"
          className="mb-3"
          value={username}
          onChange={setUsername}
          label={"Username"}
        />
        <Input
          name="password"
          type={"password"}
          placeholder="Enter your password"
          className="mb-5"
          value={password}
          onChange={setPassword}
          label={"Password"}
        />

        <div className="h-4 mb-5 text-red-500">{error}</div>

        <Button type="submit" className="mb-5 w-32" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>

      <Link
        to={ROUTE_PATHS.RESET_PASSWORD}
        ariaLabel={"Navigate to reset password page"}
        isPurpleUnderlineStyle
        onClick={(e) => {
          e.preventDefault();
          alert('The "Reset Password" feature is coming soon!');
        }}
      >
        Reset password
      </Link>
    </div>
  );
};

export default AuthenticationForm;
