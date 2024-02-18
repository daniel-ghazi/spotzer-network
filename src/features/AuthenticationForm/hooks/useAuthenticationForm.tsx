import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthenticationService from "../services/authenticationService";
import ROUTE_PATHS from "../../../routing/routePaths";

const useAuthenticationForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    try {
      const token = await AuthenticationService.authenticate({
        username,
        password,
      });
      AuthenticationService.setAuthToken(token);

      setError("");

      navigate(ROUTE_PATHS.HOME);
    } catch (error) {
      let errorMessage = "Error occurred while logging in. Please try again.";

      if (typeof error === "string") {
        errorMessage = error;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    error,
    loading,
    handleLogin,
  };
};

export default useAuthenticationForm;
