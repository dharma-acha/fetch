import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import Match from "./pages/Match";
import Navbar from "./components/Navbar";
import { FavoritesProvider } from "./context/FavoritesContext";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  // This useEffect sets a session timeout to automatically log out the user after 1 hour (3600000 ms).
  useEffect(() => {
    const sessionTimeout = setTimeout(() => {
      alert("Session expired. Please log in again.");
      localStorage.removeItem("isLoggedIn");
      setIsLoggedIn(false);
      window.location.href = "/";
    }, 60 * 60 * 1000); // 1 hour

    return () => clearTimeout(sessionTimeout); // Clear timeout on unmount
  }, [setIsLoggedIn]);

  return (
    <FavoritesProvider>
      <Router>
        {/* Conditionally render Navbar only when the user is logged in */}
        {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />}

        <Routes>
          {/* Redirect to /search if logged in, otherwise show Login */}
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/search" />
              ) : (
                <Login setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />

          {/* Protected routes: Redirect to login if not logged in */}
          <Route
            path="/search"
            element={isLoggedIn ? <Search /> : <Navigate to="/" />}
          />
          <Route
            path="/favorites"
            element={isLoggedIn ? <Favorites /> : <Navigate to="/" />}
          />
          <Route
            path="/match"
            element={isLoggedIn ? <Match /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
};

export default App;
