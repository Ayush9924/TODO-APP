import React from 'react';
import TodoItem from './TodoItem';
import { CheckCircle2, Circle } from 'lucide-react';

const TodoList = ({ todos, onDelete, onEdit, onToggleComplete }) => {
  const pendingTasks = todos.filter(todo => !todo.completed);
  const completedTasks = todos.filter(todo => todo.completed);

  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <Circle size={64} />
        <h3>No tasks yet</h3>
        <p>Add your first task above to get started!</p>
      </div>
    );
  }

  const completedCount = completedTasks.length;
  const totalCount = todos.length;

  return (
    <div className="todo-list-container">
      {totalCount > 0 && (
        <div className="progress-summary">
          <div className="progress-header">
            <span className="text-muted-foreground">Progress</span>
            <span className="text-foreground">
              {completedCount} of {totalCount} completed
            </span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${totalCount > 0 ? (completedCount / totalCount) * 100 : 0}%` }}
            ></div>
          </div>
        </div>
      )}

      <div>
        {pendingTasks.length > 0 && (
          <div className="todo-section">
            <div className="section-header">
              <Circle size={20} className="text-primary" />
              <span>Pending Tasks ({pendingTasks.length})</span>
            </div>
            <div className="todo-items">
              {pendingTasks.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onDelete={onDelete}
                  onEdit={onEdit}
                  onToggleComplete={onToggleComplete}
                />
              ))}
            </div>
          </div>
        )}

        {completedTasks.length > 0 && (
          <div className="todo-section">
            <div className="section-header">
              <CheckCircle2 size={20} className="text-success" />
              <span>Completed Tasks ({completedTasks.length})</span>
            </div>
            <div className="todo-items">
              {completedTasks.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onDelete={onDelete}
                  onEdit={onEdit}
                  onToggleComplete={onToggleComplete}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;