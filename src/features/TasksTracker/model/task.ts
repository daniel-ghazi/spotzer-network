export interface Task {
  id: number;
  name: string;
  description: string;
  status: "Available" | "In Progress" | "Done";
  assignee: string | null;
  amount: string;
}
