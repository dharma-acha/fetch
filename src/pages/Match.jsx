import React, { useState } from "react";
import axios from "axios";
import { useFavorites } from "../context/FavoritesContext";
import DogCard from "../components/DogCard";

const Match = () => {
  const { favorites } = useFavorites();
  const [matchedDog, setMatchedDog] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateMatch = async () => {
    if (favorites.length === 0) {
      // Show a prompt if there are no favorites
      alert(
        "You don't have any favorites. Please add some to generate a match."
      );
      return;
    }

    setLoading(true);
    try {
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
    } catch (error) {
      console.error("Error generating match:", error);
      alert("Failed to generate a match. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Find Your Match</h1>

      {/* Conditionally render the button if no match is generated */}
      {!matchedDog && (
        <button
          onClick={handleGenerateMatch}
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Generating Match..." : "Generate Match"}
        </button>
      )}

      {matchedDog && (
        <div className="mt-8">
          <div className="max-w-sm mx-auto">
            {/* Use the DogCard component to display the matched dog's details */}
            <DogCard dog={matchedDog} isFavorite={false} showButton={false} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Match;
