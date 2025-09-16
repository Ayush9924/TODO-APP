import React, { useState } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import UserProfile from './components/UserProfile';
import FilterButtons from './components/FilterButtons';
import LoginModal from './components/LoginModal';
import { useAuth } from './hooks/useAuth';
import { useLocalStorage } from './hooks/useLocalStorage';
import './App.css';

function App() {
  const { user, login, register, logout, showAuthModal, setShowAuthModal, authMode, setAuthMode } = useAuth();
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [filter, setFilter] = useState('all');

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  return (
    <div className="app-container">
      <div className="app-background">
        <div className="bg-gradient"></div>
      </div>
      
      <main className="main-content">
        {user ? (
          <>
            <UserProfile user={user} onLogout={logout} />
            <Header />
            <TodoForm onAddTodo={addTodo} />
            
            <div className="flex justify-between items-center mb-4 todo-list-container">
              <FilterButtons currentFilter={filter} onFilterChange={setFilter} />
              {todos.some(todo => todo.completed) && (
                <button 
                  onClick={clearCompleted}
                  className="clear-completed"
                >
                  Clear completed
                </button>
              )}
            </div>
            
            <TodoList
              todos={filteredTodos}
              onDelete={deleteTodo}
              onEdit={editTodo}
              onToggleComplete={toggleComplete}
            />
          </>
        ) : (
          <div className="auth-prompt">
            <Header />
            <h2>Welcome to TaskMaster</h2>
            <p>Please sign in to manage your tasks</p>
            <button 
              className="login-btn"
              onClick={() => setShowAuthModal(true)}
            >
              Sign In / Register
            </button>
          </div>
        )}
      </main>

      {showAuthModal && (
        <LoginModal
          onClose={() => setShowAuthModal(false)}
          onLogin={login}
          onRegister={register}
          mode={authMode}
          setMode={setAuthMode}
        />
      )}
    </div>
  );
}

export default App;