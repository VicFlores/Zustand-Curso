export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}

export type TaskStatus = "Open" | "InProgress" | "Done";
