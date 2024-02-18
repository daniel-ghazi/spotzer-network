import AuthenticationService from "./services/authenticationService";
import { MemoryRouter } from "react-router-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import ROUTE_PATHS from "../../routing/routePaths";
import { MOCK_JWT_TOKEN } from "./mock-data/mockAuthenticationData";
import AuthenticationForm from "./AuthenticationForm";
import { Mock } from "vitest";

vi.mock("./services/authenticationService", () => ({
  default: {
    authenticate: vi.fn(),
    setAuthToken: vi.fn(),
  },
}));

const { mockNavigate } = vi.hoisted(() => {
  return { mockNavigate: vi.fn() };
});
vi.mock("react-router-dom", async (importOriginal) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const actual: any = await importOriginal();
  return {
    ...actual,
    useNavigate: vi.fn(() => mockNavigate),
  };
});

describe("AuthenticationForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should set authToken and navigate to home page on successful login", async () => {
    (AuthenticationService.authenticate as Mock).mockImplementation(() =>
      Promise.resolve(MOCK_JWT_TOKEN)
    );

    render(
      <MemoryRouter>
        <AuthenticationForm />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("Enter your username"), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
      target: { value: "password" },
    });
    await act(async () => {
      fireEvent.click(screen.getByText("Login"));
    });

    await vi.waitFor(() => {
      expect(AuthenticationService.authenticate).toHaveBeenCalledWith({
        username: "testuser",
        password: "password",
      });
      expect(AuthenticationService.setAuthToken).toHaveBeenCalledWith(
        MOCK_JWT_TOKEN
      );
      expect(mockNavigate).toHaveBeenCalledWith(ROUTE_PATHS.HOME);
    });
  });

  it("should display an error message on login failure", async () => {
    const errorMessage = "Username or password is incorrect";
    (AuthenticationService.authenticate as Mock).mockRejectedValue(
      new Error(errorMessage)
    );

    render(
      <MemoryRouter>
        <AuthenticationForm />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("Enter your username"), {
      target: { value: "wronguser" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
      target: { value: "wrongpass" },
    });
    fireEvent.click(screen.getByText("Login"));

    await vi.waitFor(() => {
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });
  });
});
