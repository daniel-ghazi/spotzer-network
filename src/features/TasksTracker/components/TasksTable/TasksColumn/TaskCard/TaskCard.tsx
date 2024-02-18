import Button from "../../../../../../components/common/Button";
import { useTasks } from "../../../../../../providers/TasksProvider";
import { MOCK_USER } from "../../../../../AuthenticationForm/mock-data/mockAuthenticationData";
import { Task } from "../../../../model/task";

interface TasksColumnProps {
  task: Task;
}

const TaskCard = ({ task }: TasksColumnProps) => {
  const { updateAssignee, completeTask } = useTasks();

  let actionLabel = "";
  let handleAction = () => {};

  switch (task.status) {
    case "Available":
      actionLabel = "Assign";
      handleAction = () => updateAssignee(task.id, MOCK_USER.username);
      break;

    case "In Progress":
      if (task.assignee === MOCK_USER.username) {
        actionLabel = "Complete";
        handleAction = () => completeTask(task.id);
      }
      break;

    default:
      break;
  }

  const shouldShowAction = !!actionLabel;

  return (
    <div className="p-4 border border-black rounded">
      <div>
        <span className="font-bold">Id:</span> {task.id}
      </div>
      <div>
        <span className="font-bold">Task name:</span> {task.name}
      </div>
      <div>
        <span className="font-bold">Description:</span> {task.description}
      </div>
      <div>
        <span className="font-bold">Status:</span> {task.status}
      </div>
      <div>
        <span className="font-bold">Amount:</span> ${task.amount}
      </div>
      <div>
        <span className="font-bold">Assignee:</span> {task.assignee}
      </div>

      {shouldShowAction && (
        <Button className="mt-2" type="button" onClick={handleAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default TaskCard;
