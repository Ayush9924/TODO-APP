import React, { useState } from 'react';
import { X } from 'lucide-react';

const LoginModal = ({ onClose, onLogin, onRegister, mode, setMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'login') {
      onLogin({ email, password });
    } else {
      onRegister({ name, email, password });
    }
  };

  return (
    <div className="login-modal">
      <div className="login-content">
        <button className="close-btn" onClick={onClose}>
          <X className="w-5 h-5" />
        </button>
        
        <h2>{mode === 'login' ? 'Sign In' : 'Create Account'}</h2>
        
        <form onSubmit={handleSubmit}>
          {mode === 'register' && (
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
          
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="submit-btn">
            {mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>
        
        <div className="toggle-mode">
          {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
          <button 
            className="toggle-btn" 
            onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
          >
            {mode === 'login' ? 'Register' : 'Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;