"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { User } from "./types/user";

const initialUsers: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      const newUser: User = {
        id: Date.now(),
        name,
        email,
      };
      setUsers((prev) => [...prev, newUser]);
      setName("");
      setEmail("");
    }
  };

  const handleDeleteUser = (id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">User Management</h1>
        <form onSubmit={handleAddUser} className="mb-4 p-4 bg-white shadow rounded-lg">
          <div className="mb-4">
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg"
          >
            Add User
          </button>
        </form>
        <h2 className="text-xl font-semibold mb-2">Users</h2>
        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="p-4 bg-white shadow rounded-lg flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <button
                onClick={() => handleDeleteUser(user.id)}
                className="px-2 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Users;
