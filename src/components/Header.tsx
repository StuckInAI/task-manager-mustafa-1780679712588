import { CheckSquare } from 'lucide-react';

export default function Header() {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-indigo-500 text-white p-2 rounded-xl shadow">
        <CheckSquare size={28} />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-slate-800 leading-tight">My To-Do List</h1>
        <p className="text-slate-500 text-sm">Stay organized, get things done.</p>
      </div>
    </div>
  );
}
