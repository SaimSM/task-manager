export interface Task {
    id: number;
    title: string;
    description: string;
    deadline: string;
    priority: "Low" | "Medium" | "High";
    assignedUser: string;
    isDone: boolean;
  }
  