import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import AppRoutes from "./AppRoutes";

const renderRouter = (initialEntries = ["/"]) => (
  <MemoryRouter initialEntries={initialEntries}>
    <AppRoutes />
  </MemoryRouter>
);

describe("App routing", () => {
  it("renders app with header, sidebar and home page", () => {
    render(renderRouter());

    expect(screen.getByText(/spotzer network/i)).toBeInTheDocument();
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
    expect(screen.getByText(/homepage/i)).toBeInTheDocument();
  });

  it("navigates to Invoice page correctly", async () => {
    const user = userEvent.setup();

    render(renderRouter());
    await user.click(screen.getByText(/invoice/i));

    expect(screen.getByText(/invoices/i)).toBeInTheDocument();
  });

  it("lands on error page if page not found", () => {
    const badRoute = "/some/bad/route";

    render(renderRouter([badRoute]));

    expect(screen.getByText(/404 not found/i)).toBeInTheDocument();
  });
});
