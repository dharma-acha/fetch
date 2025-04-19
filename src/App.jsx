import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import Match from "./pages/Match";
import Navbar from "./components/Navbar";
import { FavoritesProvider } from "./context/FavoritesContext";

const App = () => {
  // Initialize login state from localStorage to persist user session
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("isLoggedIn") === "true" || false
  );

  useEffect(() => {
    // Sync login state with localStorage whenever it changes
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

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
              isLoggedIn ? <Navigate to="/search" /> : <Login setIsLoggedIn={setIsLoggedIn} />
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