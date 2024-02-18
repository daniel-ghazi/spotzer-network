import Button from "../../../components/common/Button";

const InvoicesHeader = () => {
  return (
    <div className="flex place-content-between">
      <h1 className="mb-8 font-bold text-2xl">
        Invoices{" "}
        <span className="font-light italic">
          (tasks in "Done" assigned to current user are calculated for Feb 2024
          line")
        </span>
        <div className="font-light text-lg italic mt-4">
          Invoices available for the last 3 month: Feb 2024, Jan 2024, Dec 2023
        </div>
      </h1>
      <Button
        className="h-10"
        onClick={(e) => {
          e.preventDefault();
          alert('The "Download" feature is coming soon!');
        }}
      >
        Download
      </Button>
    </div>
  );
};

export default InvoicesHeader;
