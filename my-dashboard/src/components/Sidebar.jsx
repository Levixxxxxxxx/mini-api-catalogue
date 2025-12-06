import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-5 flex flex-col">
      <h1 className="text-2xl font-bold mb-10">Dashboard</h1>
      <nav className="flex flex-col gap-4">
        <Link to="/brands" className="hover:bg-gray-700 p-2 rounded">Marques</Link>
        <Link to="/models" className="hover:bg-gray-700 p-2 rounded">Modèles</Link>
      </nav>
    </div>
  );
}
