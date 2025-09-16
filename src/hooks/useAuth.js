import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useAuth = () => {
  const [user, setUser] = useLocalStorage('user', null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'

  const login = (credentials) => {
    // In a real app, this would be an API call
    setUser({
      id: 1,
      name: 'John Doe',
      email: credentials.email
    });
    setShowAuthModal(false);
  };

  const register = (userData) => {
    // In a real app, this would be an API call
    setUser({
      id: Date.now(),
      name: userData.name,
      email: userData.email
    });
    setShowAuthModal(false);
  };

  const logout = () => {
    setUser(null);
  };

  return {
    user,
    login,
    register,
    logout,
    showAuthModal,
    setShowAuthModal,
    authMode,
    setAuthMode
  };
};