import { useTodos } from '@/hooks/useTodos';
import Header from '@/components/Header';
import AddTodoForm from '@/components/AddTodoForm';
import FilterBar from '@/components/FilterBar';
import TodoList from '@/components/TodoList';
import StatsBar from '@/components/StatsBar';

export default function TodoPage() {
  const todoState = useTodos();

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        <Header />
        <AddTodoForm onAdd={todoState.addTodo} />
        <FilterBar
          filter={todoState.filter}
          setFilter={todoState.setFilter}
          searchQuery={todoState.searchQuery}
          setSearchQuery={todoState.setSearchQuery}
          categoryFilter={todoState.categoryFilter}
          setCategoryFilter={todoState.setCategoryFilter}
          categories={todoState.categories}
        />
        <StatsBar
          activeCount={todoState.activeCount}
          completedCount={todoState.completedCount}
          onClearCompleted={todoState.clearCompleted}
        />
        <TodoList
          todos={todoState.filteredTodos}
          onToggle={todoState.toggleTodo}
          onDelete={todoState.deleteTodo}
          onEdit={todoState.editTodo}
        />
      </div>
    </div>
  );
}
