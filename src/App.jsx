import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import Match from "./pages/Match";
import Navbar from "./components/Navbar";
import { FavoritesProvider } from "./context/FavoritesContext";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("isLoggedIn") === "true" // Retrieve login state from localStorage
  );

  useEffect(() => {
    // Persist login state in localStorage
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <FavoritesProvider>
      <Router>
        {/* Show Navbar only when logged in */}
        {isLoggedIn && <Navbar />}
        <Routes>
          {/* Define application routes */}
          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/match" element={<Match />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
};

export default App;
