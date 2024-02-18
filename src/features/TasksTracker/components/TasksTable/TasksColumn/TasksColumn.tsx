import { Task } from "../../../model/task";
import TaskCard from "./TaskCard/TaskCard";

interface TasksColumnProps {
  title: string;
  tasks: Task[];
}

const TasksColumn = ({ title, tasks }: TasksColumnProps) => {
  return (
    <div className="bg-gray-100 p-4 min-w-80 w-80 rounded">
      <div className="italic mb-4">{title}</div>
      <div className="flex flex-col gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TasksColumn;
