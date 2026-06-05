import { useState } from 'react';
import { PlusCircle, ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import type { Priority } from '@/types';

type AddTodoFormProps = {
  onAdd: (text: string, priority: Priority, category: string) => void;
};

const priorities: Priority[] = ['low', 'medium', 'high'];

export default function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [text, setText] = useState<string>('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [category, setCategory] = useState<string>('');
  const [showOptions, setShowOptions] = useState<boolean>(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text, priority, category);
    setText('');
    setCategory('');
    setPriority('medium');
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 border border-slate-200">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-3">
          <input
            type="text"
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2.5 rounded-xl font-semibold flex items-center gap-2 transition shadow"
          >
            <PlusCircle size={18} />
            Add
          </button>
        </div>

        <button
          type="button"
          onClick={() => setShowOptions(v => !v)}
          className="mt-3 text-sm text-indigo-500 hover:text-indigo-700 flex items-center gap-1 transition"
        >
          <ChevronDown
            size={16}
            className={clsx('transition-transform', showOptions && 'rotate-180')}
          />
          {showOptions ? 'Hide options' : 'Show options'}
        </button>

        {showOptions && (
          <div className="mt-3 flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label className="block text-xs font-medium text-slate-500 mb-1">Priority</label>
              <div className="flex gap-2">
                {priorities.map(p => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPriority(p)}
                    className={clsx(
                      'flex-1 py-1.5 rounded-lg text-xs font-semibold border transition capitalize',
                      priority === p
                        ? p === 'high'
                          ? 'bg-red-100 border-red-400 text-red-600'
                          : p === 'medium'
                          ? 'bg-amber-100 border-amber-400 text-amber-600'
                          : 'bg-green-100 border-green-400 text-green-600'
                        : 'bg-slate-50 border-slate-200 text-slate-400 hover:border-slate-300'
                    )}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-xs font-medium text-slate-500 mb-1">Category</label>
              <input
                type="text"
                value={category}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)}
                placeholder="e.g. Work, Personal..."
                className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              />
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
