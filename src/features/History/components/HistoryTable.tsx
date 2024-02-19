import { HistoryEntry } from "../model/historyEntry";

interface HistoryTableProps {
  historyEntries: HistoryEntry[];
}

const HistoryTable = ({ historyEntries }: HistoryTableProps) => {
  return (
    <div>
      {historyEntries.map((entry, index) => (
        <div
          key={index}
          className="w-full border-b dark:bg-gray-800 dark:border-gray-700 dark:text-white p-4"
        >
          {entry.date.toDateString()} - Task {entry.taskId} status changed to{" "}
          {entry.newStatus}
        </div>
      ))}
    </div>
  );
};

export default HistoryTable;
