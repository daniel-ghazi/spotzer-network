import { render, screen } from "@testing-library/react";
import { describe, it, expect, Mock } from "vitest";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import AppRoutes from "./AppRoutes";
import useAuthentication from "../features/AuthenticationForm/hooks/useAuthentication";
import ROUTE_PATHS from "./routePaths";
import { TasksProvider } from "../providers/TasksProvider";

vi.mock("../features/AuthenticationForm/hooks/useAuthentication");

const renderRouter = (initialEntries = ["/"]) => (
  <MemoryRouter initialEntries={initialEntries}>
    <TasksProvider>
      <AppRoutes />
    </TasksProvider>
  </MemoryRouter>
);

describe("App routing", () => {
  beforeEach(() => {
    (useAuthentication as Mock).mockReturnValue({
      isAuthenticated: vi.fn(),
    });
  });

  it("should render app with header", () => {
    render(renderRouter());

    expect(screen.getByText(/spotzer network/i)).toBeInTheDocument();
  });

  it("should navigate to Invoice page on link click if authenticated", async () => {
    const user = userEvent.setup();
    (useAuthentication as Mock).mockReturnValue({
      isAuthenticated: () => true,
    });

    render(renderRouter());
    await user.click(screen.getByText(/invoice/i));

    expect(screen.getByText(/download/i)).toBeInTheDocument();
  });

  it("should be redirected to login page if currently at private page while being unauthenticated", async () => {
    (useAuthentication as Mock).mockReturnValue({
      isAuthenticated: () => false,
    });

    render(renderRouter([ROUTE_PATHS.INVOICE]));

    expect(screen.queryByText(/invoices/i)).not.toBeInTheDocument();
  });

  it("should land on error page if page not found", () => {
    const badRoute = "/some/bad/route";

    render(renderRouter([badRoute]));

    expect(screen.getByText(/404 not found/i)).toBeInTheDocument();
  });
});
