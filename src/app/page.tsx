"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TaskCard from "./components/TaskCard";
import TaskForm from "./components/TaskForm";
import { Task } from "./types/task";
import { User } from "./types/user";

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Finish Project Report",
    description: "Compile all the sections and finalize the document.",
    deadline: "2024-12-15",
    priority: "High",
    assignedUser: "John Doe",
    isDone: false,
  },
];

const initialUsers: User[] = [
  { id: 1, name: "Saim", email: "saim@example.com" },
  { id: 2, name: "Nadeem", email: "nadeem@example.com" },
];

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [users] = useState<User[]>(initialUsers);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);

  // Handle adding or editing tasks
  const handleAddTask = (task: Task) => {
    if (isEditing) {
      setTasks((prev) =>
        prev.map((t) => (t.id === task.id ? { ...task } : t))
      );
      setIsEditing(false);
      setCurrentTask(null);
    } else {
      setTasks((prev) => [...prev, task]);
    }
  };

  // Handle task editing
  const handleEditTask = (task: Task) => {
    setCurrentTask(task);
    setIsEditing(true);
  };

  // Handle task deletion
  const handleDeleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // Handle toggling task completion
  const handleToggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
            Task Dashboard
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Tasks Overview
              </h2>
              {tasks.length > 0 ? (
                tasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onEdit={handleEditTask}
                    onDelete={handleDeleteTask}
                    onToggle={handleToggleTask}
                  />
                ))
              ) : (
                <p className="text-gray-600">No tasks available.</p>
              )}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {isEditing ? "Edit Task" : "Add New Task"}
              </h2>
              <TaskForm
                onSubmit={handleAddTask}
                task={currentTask || undefined}
                users={users}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
