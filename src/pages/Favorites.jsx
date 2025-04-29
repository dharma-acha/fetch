import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosConfig";
import DogCard from "../components/DogCard";
import { useFavorites } from "../context/FavoritesContext";

const Favorites = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const [favoriteDogs, setFavoriteDogs] = useState([]);

  useEffect(() => {
    const fetchFavoriteDogs = async () => {
      if (favorites.length > 0) {
        try {
          // Fetch details of favorite dogs from the API
          const response = await axiosInstance.post("/dogs", favorites);
          setFavoriteDogs(response.data);
        } catch (error) {
          console.error("Error fetching favorite dogs:", error);
        }
      } else {
        setFavoriteDogs([]); // Clear the list if no favorites
      }
    };
    fetchFavoriteDogs();
  }, [favorites]);

  const handleToggleFavorite = (id) => {
    toggleFavorite(id); // Update the global favorites state
    setFavoriteDogs((prev) => prev.filter((dog) => dog.id !== id)); // Remove the dog from the local state
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Favorite Dogs</h1>
      {favoriteDogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {favoriteDogs.map((dog) => (
            <DogCard
              key={dog.id}
              dog={dog}
              isFavorite={favorites.includes(dog.id)}
              toggleFavorite={handleToggleFavorite} // Use the updated handler
            />
          ))}
        </div>
      ) : (
        <p>You have no favorite dogs yet.</p>
      )}
    </div>
  );
};

export default Favorites;
