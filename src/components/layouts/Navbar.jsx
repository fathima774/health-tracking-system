import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/styles/navbar.css";



const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src="src/assets/VitalSync.png" alt="" width={75} height={70} />
        <h2>VitalSync</h2>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/workouts">Workouts</Link>
        </li>

        <li>
          <Link to="/goals">Goals</Link>
        </li>

        <li>
          <Link to="/weight-tracker">Weight Tracker</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>

      {/* Logout Button */}
      <button className="logout-btn" onClick={handleLogout}>
        
        Logout
      </button>
    </nav>
  );
};

export default Navbar;