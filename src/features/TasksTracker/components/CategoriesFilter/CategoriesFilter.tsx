import classNames from "classnames";
import Button from "../../../../components/common/Button";
import { useTasks } from "../../../../hooks/useTasks";

const CategoriesFilter = () => {
  const { statusFilter, setStatusFilter } = useTasks();

  const categories = ["Available", "In Progress", "Done"];

  const handleFilterClick = (category: string) => {
    if (statusFilter === category) {
      setStatusFilter("");
    } else {
      setStatusFilter(category);
    }
  };

  return (
    <div className="flex flex-col items-center mb-8">
      <div className="flex justify-center mt-2 gap-4">
        {categories.map((category) => (
          <FilterButton
            key={category}
            onClick={() => handleFilterClick(category)}
            isFilteredTurnedOn={category === statusFilter}
          >
            {category}
          </FilterButton>
        ))}
      </div>
    </div>
  );
};

interface FilterButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isFilteredTurnedOn: boolean;
}

const FilterButton = ({
  children,
  onClick,
  isFilteredTurnedOn,
}: FilterButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={classNames("border rounded-3xl py-2 px-4", {
        "bg-white !text-black": !isFilteredTurnedOn,
      })}
    >
      {children}
    </Button>
  );
};

export default CategoriesFilter;
