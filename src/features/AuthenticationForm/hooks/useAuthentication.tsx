import AuthenticationService from "../services/authenticationService";

const useAuthentication = () => {
  const isAuthenticated = () => {
    return AuthenticationService.isUserAuthenticated();
  };

  return { isAuthenticated };
};

export default useAuthentication;
