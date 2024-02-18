import CategoriesFilter from "./components/CategoriesFilter/CategoriesFilter";
import TasksTable from "./components/TasksTable/TasksTable";

const TasksTracker = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-8 font-bold text-2xl">Home Page - Tasks tracker</h1>

      <CategoriesFilter />
      <TasksTable />
    </div>
  );
};

export default TasksTracker;
