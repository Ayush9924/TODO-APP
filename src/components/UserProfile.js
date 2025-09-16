import React from 'react';
import { LogOut } from 'lucide-react';

const UserProfile = ({ user, onLogout }) => {
  return (
    <div className="user-profile">
      <div className="user-info">
        <div className="user-avatar">
          {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
        </div>
        <div className="user-details">
          <div className="user-name">{user.name || 'User'}</div>
          <div className="user-email">{user.email}</div>
        </div>
      </div>
      <button className="logout-btn" onClick={onLogout}>
        <LogOut className="w-4 h-4" />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default UserProfile;