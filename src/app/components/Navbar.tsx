import Link from "next/link";

const Navbar: React.FC = () => (
  <nav className="bg-blue-500 p-4 text-white">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-lg font-bold">Task Manager</h1>
      <div className="space-x-4">
        <Link href="/" className="hover:underline">
          Tasks
        </Link>
        <Link href="/users" className="hover:underline">
          Users
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
