import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const TodoForm = ({ onAddTodo }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      onAddTodo(inputText.trim());
      setInputText('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="flex">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new task..."
        />
        <button
          type="submit"
          disabled={!inputText.trim()}
        >
          <Plus size={20} />
          <span>Add Task</span>
        </button>
      </div>
    </form>
  );
};

export default TodoForm;