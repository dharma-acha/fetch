// Import React and necessary hooks and components from React Router

import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"; // Import the logout icon
import axiosInstance from "../utils/axiosConfig";

// Receives `setIsLoggedIn` as a prop to manage login state
const Navbar = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Call the logout API
      await axiosInstance.post("/auth/logout");

      // Clear login state and redirect to login page
      localStorage.removeItem("isLoggedIn");
      setIsLoggedIn(false);
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);

      // Handle expired token case
      if (error.response && error.response.status === 401) {
        alert("Session expired. Please log in again.");
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
        navigate("/");
      } else {
        alert("Failed to log out. Please try again.");
      }
    }
  };

  return (
    <nav className="p-4 bg-blue-500 text-white flex items-center justify-between h-14">
      {/* Left Section: Logo and Navigation Links */}
      <div className="flex items-center gap-12">
        {/* Logo linking to the search page */}
        <Link to="/search" className="h-full">
          <img
            src="/Fetch_PrimaryLogo.avif"
            alt="Logo"
            className="h-12 object-contain rounded-md" // Adjust height to fit the navbar
          />
        </Link>

        {/* Navigation Links */}
        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold underline px-4 py-2"
              : "text-lg px-4 py-2"
          }
        >
          Search
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold underline px-4 py-2"
              : "text-lg px-4 py-2"
          }
        >
          Favorites
        </NavLink>
        <NavLink
          to="/match"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold underline px-4 py-2"
              : "text-lg px-4 py-2"
          }
        >
          Match
        </NavLink>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="text-lg flex items-center gap-2 px-4 py-2"
      >
        <FontAwesomeIcon icon={faSignOutAlt} /> {/* Logout Icon */}
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
