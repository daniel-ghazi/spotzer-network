import Button from "../../../../components/common/Button";
import { useTasks } from "../../../../hooks/useTasks";
import TasksColumn from "./TasksColumn/TasksColumn";

const TasksTable = () => {
  const { tasks, resetTasks } = useTasks();

  const availableTasks = tasks.filter((task) => task.status === "Available");
  const inProgressTasks = tasks.filter((task) => task.status === "In Progress");
  const doneTasks = tasks.filter((task) => task.status === "Done");

  return (
    <div className="flex flex-col items-center">
      <Button className="mb-4 w-min" type="button" onClick={resetTasks}>
        Reset&nbsp;tasks
      </Button>
      <div className="flex justify-center gap-8 flex-wrap  ">
        <TasksColumn title="Available" tasks={availableTasks} />
        <TasksColumn title="In Progress" tasks={inProgressTasks} />
        <TasksColumn title="Done" tasks={doneTasks} />
      </div>
    </div>
  );
};

export default TasksTable;
