type StatsBarProps = {
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
};

export default function StatsBar({ activeCount, completedCount, onClearCompleted }: StatsBarProps) {
  return (
    <div className="flex items-center justify-between text-sm text-slate-500 px-1">
      <span>
        <span className="font-semibold text-indigo-500">{activeCount}</span> task{activeCount !== 1 ? 's' : ''} remaining
      </span>
      <span className="text-slate-300">|</span>
      <span>
        <span className="font-semibold text-green-500">{completedCount}</span> completed
      </span>
      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="ml-auto text-xs text-red-400 hover:text-red-600 font-medium transition"
        >
          Clear completed
        </button>
      )}
    </div>
  );
}
