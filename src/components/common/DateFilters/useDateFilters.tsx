import { useState } from "react";

const useDateFilters = (
  initialMonth: number = new Date().getMonth(),
  initialYear: string = new Date().getFullYear().toString()
) => {
  const [selectedMonth, setSelectedMonth] = useState(initialMonth);
  const [selectedYear, setSelectedYear] = useState(initialYear);

  const handleMonthChange = (month: number) => {
    setSelectedMonth(month);
  };

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
  };

  return { selectedMonth, handleMonthChange, selectedYear, handleYearChange };
};

export default useDateFilters;
