import DateFilters from "../../components/common/DateFilters/DateFilters";
import useDateFilters from "../../components/common/DateFilters/useDateFilters";
import HistoryHeader from "./components/HistoryHeader";
import HistoryTable from "./components/HistoryTable";
import useHistoryEntries from "./hooks/useHistoryEntries";

const History = () => {
  const { selectedMonth, handleMonthChange, selectedYear, handleYearChange } =
    useDateFilters();
  const { historyEntries } = useHistoryEntries();

  const filteredHistoryEntries = historyEntries.filter(
    (entry) =>
      entry.date.getMonth() === selectedMonth &&
      entry.date.getFullYear().toString() === selectedYear
  );

  return (
    <div className="flex flex-col justify-center ">
      <div className="overflow-x-auto relative">
        <HistoryHeader />

        <DateFilters
          selectedMonth={selectedMonth}
          handleMonthChange={handleMonthChange}
          selectedYear={selectedYear}
          handleYearChange={handleYearChange}
        />

        <HistoryTable historyEntries={filteredHistoryEntries} />
      </div>
    </div>
  );
};

export default History;
