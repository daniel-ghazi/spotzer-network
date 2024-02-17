import { useState } from "react";
import Input from "../components/common/Input";
import Link from "../components/common/Link";
import routePaths from "../routing/routePaths";
import Button from "../components/common/Button";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
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

        <Button type="submit" className="mb-5">
          Login
        </Button>
      </form>

      <Link
        to={routePaths.RESET_PASSWORD}
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

export default LoginPage;
