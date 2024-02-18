import { useEffect, useState } from "react";
import HistoryService from "../services/historyService";
import { HistoryEntry } from "../model/historyEntry";

const useHistoryEntries = () => {
  const [historyEntries, setHistoryEntries] = useState<HistoryEntry[]>([]);

  useEffect(() => {
    const getHistoryEntries = async () => {
      const history = await HistoryService.getHistory();
      setHistoryEntries(history);
    };

    getHistoryEntries();
  }, []);

  return { historyEntries };
};

export default useHistoryEntries;
