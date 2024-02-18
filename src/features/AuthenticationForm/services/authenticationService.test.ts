import { Mock } from "vitest";
import cookies from "../../../utils/cookies";
import { MOCK_JWT_TOKEN, MOCK_USER } from "../mock-data/mockAuthenticationData";
import AuthenticationService from "./authenticationService";

vi.mock("../../../utils/cookies", () => ({
  default: {
    get: vi.fn(),
    set: vi.fn(),
  },
}));

describe("AuthenticationService", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should authenticate a user with correct credentials", async () => {
    const token = await AuthenticationService.authenticate(MOCK_USER);

    expect(token).toBe(MOCK_JWT_TOKEN);
  });

  it("should throw error when authentication credentials are incorrect", async () => {
    const result = await expect(
      AuthenticationService.authenticate({
        username: "username",
        password: "wrongpassword",
      })
    );

    result.rejects.toThrow("Username or password is incorrect");
  });

  it("should set auth token as a cookie", () => {
    const oneDay = 24 * 60 * 60 * 1000;
    cookies.set as Mock;

    AuthenticationService.setAuthToken(MOCK_JWT_TOKEN);

    expect(cookies.set).toHaveBeenCalledWith("authToken", MOCK_JWT_TOKEN, {
      path: "/",
      maxAge: oneDay,
    });
  });

  it("should return true when the user is authenticated", () => {
    (cookies.get as Mock).mockReturnValue("some-auth-token");

    const isAuthenticated = AuthenticationService.isUserAuthenticated();

    expect(isAuthenticated).toBe(true);
  });

  it("should return false when the user is not authenticated", () => {
    (cookies.get as Mock).mockReturnValue(undefined);

    const isAuthenticated = AuthenticationService.isUserAuthenticated();

    expect(isAuthenticated).toBe(false);
  });
});
