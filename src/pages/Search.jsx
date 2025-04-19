import React, { useState, useEffect } from "react";
import axios from "axios";
import DogCard from "../components/DogCard";
import Pagination from "../components/Pagination";
import { useFavorites } from "../context/FavoritesContext";

const Search = () => {
  const [breeds, setBreeds] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [page, setPage] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    const fetchBreeds = async () => {
      // Fetch available dog breeds from the API
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/dogs/breeds`,
        { withCredentials: true }
      );
      setBreeds(response.data);
    };
    fetchBreeds();
  }, []);

  useEffect(() => {
    const fetchDogs = async () => {
      // Fetch dog IDs based on selected breed, page, and sort order
      const response = await axios.get(
        `${
          import.meta.env.VITE_API_BASE_URL
        }/dogs/search?breeds=${selectedBreed}&size=10&from=${
          page * 10
        }&sort=name:${sortOrder}`,
        { withCredentials: true }
      );
      const dogIds = response.data.resultIds;
      setHasNext(response.data.next !== null);

      // Fetch detailed dog data using the IDs
      const dogDetailsResponse = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/dogs`,
        dogIds,
        { withCredentials: true }
      );
      setDogs(dogDetailsResponse.data);
    };
    fetchDogs();
  }, [selectedBreed, page, sortOrder]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-8">Search Dogs</h1>

      {/* Search bar and sort button */}
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="flex items-center justify-between w-full">
          {/* Breed selection dropdown */}
          <div className="mx-auto">
            <select
              value={selectedBreed}
              onChange={(e) => setSelectedBreed(e.target.value)}
              className="p-2 border rounded shadow-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-lg transition duration-200 ease-in-out"
            >
              <option value="">Select your Breed</option>
              {breeds.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </div>

          {/* Sort button */}
          <button
            onClick={() =>
              setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
            }
            className="p-2 bg-blue-500 text-white rounded"
          >
            Sort: {sortOrder === "asc" ? "Ascending" : "Descending"}
          </button>
        </div>
      </div>

      {/* Dog cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {dogs.map((dog) => (
          <DogCard
            key={dog.id}
            dog={dog}
            isFavorite={favorites.includes(dog.id)}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>

      {/* Pagination */}
      {dogs.length > 0 && (
        <Pagination page={page} setPage={setPage} hasNext={hasNext} />
      )}
    </div>
  );
};

export default Search;
