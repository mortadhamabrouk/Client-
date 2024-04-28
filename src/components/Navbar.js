import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/userSlice';
import '../styles/navbar.css'; // Import the CSS file for navbar styles

const Navbar = () => {
  const { isAuth } = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <div className="navbar-links">
        {isAuth ? (
          <>
            <Link to="/profile">Profile</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
      {isAuth && (
        <button className="logout-btn" onClick={() => dispatch(logout())}>
          Logout
        </button>
      )}
    </div>
  );
}

export default Navbar;
