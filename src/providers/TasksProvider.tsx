import { createContext, useState, ReactNode, useEffect } from "react";
import { Task } from "../features/TasksTracker/model/task";
import Logger from "../utils/logger";
import MOCK_TASKS from "../features/TasksTracker/mock-data/mockTasks";
import TasksService from "../features/TasksTracker/services/tasksService";
import HistoryService from "../features/History/services/historyService";
import { HistoryEntry } from "../features/History/model/historyEntry";

interface TasksContextType {
  tasks: Task[];
  resetTasks: () => void;
  updateAssignee: (taskId: number, newAssignee: string) => void;
  completeTask: (taskId: number) => void;
  statusFilter: string;
  setStatusFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const TasksContext = createContext<TasksContextType | undefined>(
  undefined
);

interface TasksProviderProps {
  children: ReactNode;
}

const TasksProvider = ({ children }: TasksProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>("");

  useEffect(() => {
    const getTasks = async () => {
      const receivedTasks = await TasksService.getTasks();
      TasksService.saveTasks(receivedTasks);
      setTasks(receivedTasks);
    };

    try {
      getTasks();
    } catch (error) {
      Logger.errorMessage("An error occurred while fetching tasks.");
    }
  }, []);

  const resetTasks = async () => {
    try {
      const tasks = await TasksService.saveTasks(MOCK_TASKS);

      setTasks(tasks);
    } catch (error) {
      Logger.errorMessage("An error occurred while resetting tasks.");
    }
  };

  const updateAssignee = async (taskId: number, newAssignee: string) => {
    try {
      await TasksService.updateAssignee(taskId, newAssignee);
      const updatedTasks = await TasksService.getTasks();
      setTasks(updatedTasks);

      const historyEntry: HistoryEntry = {
        taskId: taskId,
        date: new Date(),
        newStatus:
          updatedTasks.find((task) => task.id === taskId)?.status || "",
      };
      await HistoryService.addHistoryEntry(historyEntry);
    } catch (error) {
      Logger.errorMessage("An error occurred while updating assignee.", {
        taskId,
        newAssignee,
      });
    }
  };

  const completeTask = async (taskId: number) => {
    try {
      await TasksService.completeTask(taskId);
      const updatedTasks = await TasksService.getTasks();
      setTasks(updatedTasks);

      const historyEntry: HistoryEntry = {
        taskId: taskId,
        date: new Date(),
        newStatus:
          updatedTasks.find((task) => task.id === taskId)?.status || "",
      };
      await HistoryService.addHistoryEntry(historyEntry);
    } catch (error) {
      Logger.errorMessage("An error occurred while completing task.", {
        taskId,
      });
    }
  };

  const getFilteredTasks = () => {
    if (statusFilter) {
      return tasks.filter((task) => task.status === statusFilter);
    }
    return tasks;
  };

  const filteredTasks = getFilteredTasks();

  return (
    <TasksContext.Provider
      value={{
        tasks: filteredTasks,
        resetTasks,
        updateAssignee,
        completeTask,
        statusFilter,
        setStatusFilter,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export { TasksProvider };
