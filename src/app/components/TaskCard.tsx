"use client";

import { Task } from "../types/task";

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete, onToggle }) => (
  <div
    className={`p-5 rounded-lg shadow-lg ${
      task.isDone ? "bg-green-100" : "bg-white"
    } border border-gray-200 hover:shadow-xl transition-shadow`}
  >
    <div className="flex justify-between items-center mb-3">
      <h3 className="text-lg font-bold text-gray-800">{task.title}</h3>
      <div className="space-x-2">
        <button
          className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => onEdit(task)}
        >
          Edit
        </button>
        <button
          className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
    <p className="text-gray-700 text-sm">{task.description}</p>
    <p className="mt-2 text-gray-600 text-xs">
      <span className="font-medium">Deadline:</span> {new Date(task.deadline).toLocaleDateString()}
    </p>
    <p className="text-gray-600 text-xs">
      <span className="font-medium">Assigned to:</span> {task.assignedUser}
    </p>
    <p className={`mt-2 text-xs font-medium ${task.priority === "High" ? "text-red-500" : task.priority === "Medium" ? "text-yellow-500" : "text-green-500"}`}>
      Priority: {task.priority}
    </p>
    <button
      className={`mt-3 w-full py-2 text-white rounded ${
        task.isDone ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
      }`}
      onClick={() => onToggle(task.id)}
    >
      {task.isDone ? "Mark as Undone" : "Mark as Done"}
    </button>
  </div>
);

export default TaskCard;
