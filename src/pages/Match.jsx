import React, { useState } from "react";
import axios from "axios";
import { useFavorites } from "../context/FavoritesContext";
import DogCard from "../components/DogCard";

const Match = () => {
  const { favorites } = useFavorites();
  const [matchedDog, setMatchedDog] = useState(null);

  const handleGenerateMatch = async () => {
    if (favorites.length > 0) {
      // Fetch the matched dog's ID from the API
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/dogs/match`,
        favorites,
        { withCredentials: true }
      );
      const matchId = response.data.match;

      // Fetch the details of the matched dog using its ID
      const dogDetailsResponse = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/dogs`,
        [matchId],
        { withCredentials: true }
      );
      setMatchedDog(dogDetailsResponse.data[0]);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Match</h1>
      {matchedDog ? (
        <div className="max-w-md mx-auto">
          {/* Display the matched dog's details */}
          <DogCard
            dog={matchedDog}
            isFavorite={false}
            toggleFavorite={() => {}}
            showButton={false}
          />
        </div>
      ) : (
        <button
          onClick={handleGenerateMatch}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Generate Match
        </button>
      )}
    </div>
  );
};

export default Match;
