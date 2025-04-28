import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"; // Import the logout icon

const Navbar = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Clear login state from localStorage
    setIsLoggedIn(false); // Update state to logged out
    navigate("/"); // Redirect to login page
  };

  return (
    <nav className="p-4 bg-blue-500 text-white flex items-center justify-between h-14">
      <div className="flex items-center gap-12">
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