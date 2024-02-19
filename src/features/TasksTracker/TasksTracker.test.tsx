import { act, fireEvent, render, screen } from "@testing-library/react";
import { TasksProvider } from "../../providers/TasksProvider";
import TasksTracker from "./TasksTracker";
import { MOCK_USER } from "../AuthenticationForm/mock-data/mockAuthenticationData";

const { mockTasks } = vi.hoisted(() => {
  return {
    mockTasks: [
      {
        id: 1,
        name: "Design Homepage",
        description:
          "Create a responsive homepage design for the new client's website.",
        status: "Available",
        assignee: null,
        amount: "200$",
      },
    ],
  };
});

vi.mock("./mock-data/mockTasks", () => {
  return {
    default: mockTasks,
  };
});

const renderTasksTracker = () =>
  render(
    <TasksProvider>
      <TasksTracker />
    </TasksProvider>
  );

describe("TasksTracker", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should assign current logged in user to task when clicking assign button", async () => {
    renderTasksTracker();

    const assignButton = await screen.findByRole("button", {
      name: /assign/i,
    });

    await act(async () => {
      fireEvent.click(assignButton);
    });

    await vi.waitFor(async () => {
      const assignee = screen.queryByText(MOCK_USER.username);

      expect(assignButton).not.toBeInTheDocument();

      expect(assignee).toBeInTheDocument();
    });
  });

  it("should complete task for current logged in user when clicking complete button", async () => {
    renderTasksTracker();

    const completeButton = await screen.findByRole("button", {
      name: /complete/i,
    });
    await act(async () => {
      fireEvent.click(completeButton);
    });

    await vi.waitFor(async () => {
      const status = screen.queryAllByText("Done");

      expect(completeButton).not.toBeInTheDocument();
      expect(status.length).toBe(3);
    });
  });
});
