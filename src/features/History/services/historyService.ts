import Logger from "../../../utils/logger";
import MOCK_HISTORY_ENTRIES from "../mock-data/mockHistory";
import { HistoryEntry } from "../model/historyEntry";

class HistoryService {
  private static LOCAL_STORAGE_KEY = "historyData";

  static async getHistory(): Promise<Array<HistoryEntry>> {
    return new Promise((resolve, reject) => {
      // imitating server call delay
      setTimeout(() => {
        try {
          const localData = localStorage.getItem(this.LOCAL_STORAGE_KEY);
          const history: Array<HistoryEntry> = localData
            ? JSON.parse(localData)
            : MOCK_HISTORY_ENTRIES;

          history.map((entry) => ({
            ...entry,
            date: (entry.date = new Date(entry.date)),
          }));

          resolve(history);
        } catch (error) {
          if (error instanceof Error) {
            Logger.error(error);
          } else {
            Logger.errorMessage("A getHistory API error occurred");
          }
          reject(error);
        }
      }, 250);
    });
  }

  static async addHistoryEntry(
    historyEntry: HistoryEntry
  ): Promise<HistoryEntry> {
    return new Promise((resolve, reject) => {
      // imitating server call delay
      setTimeout(async () => {
        try {
          let history = await this.getHistory();
          history = [historyEntry, ...history];

          localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(history));

          resolve(historyEntry);
        } catch (error) {
          if (error instanceof Error) {
            Logger.error(error);
          } else {
            Logger.errorMessage("A addHistoryEntry API error occurred");
          }
          reject(error);
        }
      }, 250);
    });
  }
}

export default HistoryService;
