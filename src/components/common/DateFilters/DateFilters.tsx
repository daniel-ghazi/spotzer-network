import { MONTHS, YEARS } from "./monthsAndYears";

interface DateFiltersProps {
  selectedMonth: number;
  handleMonthChange: (value: number) => void;
  selectedYear: string;
  handleYearChange: (value: string) => void;
}

const DateFilters = ({
  selectedMonth,
  handleMonthChange,
  selectedYear,
  handleYearChange,
}: DateFiltersProps) => {
  const selectStyles =
    "w-32 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5";

  return (
    <div className="my-4 flex items-center justify-start gap-4">
      <select
        className={selectStyles}
        value={selectedMonth}
        onChange={(e) => handleMonthChange(Number(e.target.value))}
      >
        {MONTHS.map((option, index) => (
          <option key={index} value={index}>
            {option}
          </option>
        ))}
      </select>

      <select
        className={selectStyles}
        value={selectedYear}
        onChange={(e) => handleYearChange(e.target.value)}
      >
        {YEARS.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DateFilters;
