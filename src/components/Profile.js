import React from 'react';
import TaskForm from './TaskForm';
import UserList from './UserList';
import '../styles/profile.css'; // Import the CSS file for profile styles

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-content">
        <TaskForm />
        <UserList />
      </div>
    </div>
  );
}

export default Profile;

