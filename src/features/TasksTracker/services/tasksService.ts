import Logger from "../../../utils/logger";
import MOCK_TASKS from "../mock-data/mockTasks";
import { Task } from "../model/task";

class TasksService {
  private static LOCAL_STORAGE_KEY = "tasksData";

  static async getTasks(): Promise<Array<Task>> {
    return new Promise((resolve, reject) => {
      // imitating server call delay
      setTimeout(() => {
        try {
          const localData = localStorage.getItem(this.LOCAL_STORAGE_KEY);

          const tasks = localData ? JSON.parse(localData) : MOCK_TASKS;

          resolve(tasks);
        } catch (error) {
          if (error instanceof Error) {
            Logger.error(error);
          } else {
            Logger.errorMessage("A getTasks API error occurred");
          }
          reject(error);
        }
      }, 250);
    });
  }

  static saveTasks(tasks: Array<Task>): Promise<Array<Task>> {
    return new Promise((resolve, reject) => {
      // imitating server call delay
      setTimeout(() => {
        try {
          localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(tasks));
          resolve(tasks);
        } catch (error) {
          if (error instanceof Error) {
            Logger.error(error, { tasks });
          } else {
            Logger.errorMessage("A SavingTasks API error occurred", {
              tasks,
            });
          }
          reject(error);
        }
      }, 250);
    });
  }

  static async updateAssignee(taskId: number, newAssignee: string) {
    try {
      const tasks = await this.getTasks();

      const taskIndex = tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        tasks[taskIndex].assignee = newAssignee;

        if (newAssignee && tasks[taskIndex].status === "Available") {
          tasks[taskIndex].status = "In Progress";
        }

        await this.saveTasks(tasks);
        return tasks[taskIndex];
      } else {
        const errorMessage = `Task with id ${taskId} not found while updating assignee`;
        Logger.errorMessage(errorMessage, { taskId });
        throw new Error(errorMessage);
      }
    } catch (error) {
      if (error instanceof Error) {
        Logger.error(error, { taskId, newAssignee });
      } else {
        Logger.errorMessage("An updateAssignee API error occurred", {
          taskId,
          newAssignee,
        });
      }
      throw error;
    }
  }

  static async completeTask(taskId: number) {
    try {
      const tasks = await this.getTasks();

      const taskIndex = tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        tasks[taskIndex].status = "Done";

        await this.saveTasks(tasks);
        return tasks[taskIndex];
      } else {
        const errorMessage = `Task with id ${taskId} not found while completing task`;
        Logger.errorMessage(errorMessage, { taskId });
        throw new Error(errorMessage);
      }
    } catch (error) {
      if (error instanceof Error) {
        Logger.error(error, { taskId });
      } else {
        Logger.errorMessage("An completeTask API error occurred", {
          taskId,
        });
      }
      throw error;
    }
  }
}

export default TasksService;
