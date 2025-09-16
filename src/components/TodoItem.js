import React, { useState } from 'react';
import { Edit3, Check, Trash2 } from 'lucide-react';

const TodoItem = ({ todo, onDelete, onEdit, onToggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      if (editText.trim()) {
        onEdit(todo.id, editText.trim());
      } else {
        setEditText(todo.text);
      }
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  const handleTaskClick = () => {
    if (!isEditing) {
      onToggleComplete(todo.id);
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
        className="todo-checkbox"
      />

      <div className="todo-text">
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyPress}
            onBlur={handleEdit}
            autoFocus
            className="todo-edit-input"
          />
        ) : (
          <span
            onClick={handleTaskClick}
            className={todo.completed ? 'completed' : ''}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="todo-actions">
        <button
          onClick={handleEdit}
          className="todo-action-btn edit"
          aria-label={isEditing ? 'Save task' : 'Edit task'}
        >
          {isEditing ? <Check size={16} /> : <Edit3 size={16} />}
        </button>
        
        <button
          onClick={() => onDelete(todo.id)}
          className="todo-action-btn delete"
          aria-label="Delete task"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;