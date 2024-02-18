const HistoryHeader = () => {
  return (
    <div className="flex place-content-between">
      <h1 className="mb-8 font-bold text-2xl">
        History{" "}
        <span className="font-light italic">
          (shows all actions done to the tasks in the system)
        </span>
      </h1>
    </div>
  );
};

export default HistoryHeader;
