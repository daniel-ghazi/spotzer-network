import DateFilters from "../../components/common/DateFilters/DateFilters";
import useDateFilters from "../../components/common/DateFilters/useDateFilters";
import { useTasks } from "../../hooks/useTasks";
import { MOCK_USER } from "../AuthenticationForm/mock-data/mockAuthenticationData";
import InvoicesHeader from "./components/InvoicesHeader";
import InvoicesTable from "./components/InvoicesTable";
import MOCK_INVOICES from "./mock-data/mockInvoices";

const Invoices = () => {
  const { allTasks } = useTasks();
  const { selectedMonth, handleMonthChange, selectedYear, handleYearChange } =
    useDateFilters();

  const invoices = MOCK_INVOICES;

  const calculateDoneTasksValue = () => {
    return allTasks.reduce((acc, task) => {
      if (task.status === "Done" && task.assignee === MOCK_USER.username) {
        return acc + task.amount;
      } else {
        return acc;
      }
    }, 0);
  };

  // Updating the amount of this month's earning for simplification
  invoices[0].amount = calculateDoneTasksValue();

  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.month === selectedMonth && invoice.year === selectedYear
  );

  return (
    <div className="flex flex-col justify-center ">
      <div className="overflow-x-auto relative">
        <InvoicesHeader />

        <DateFilters
          selectedMonth={selectedMonth}
          handleMonthChange={handleMonthChange}
          selectedYear={selectedYear}
          handleYearChange={handleYearChange}
        />

        <InvoicesTable invoices={filteredInvoices} />
      </div>
    </div>
  );
};

export default Invoices;
