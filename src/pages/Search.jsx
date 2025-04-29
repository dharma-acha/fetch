import React, { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosConfig";
import DogCard from "../components/DogCard";
import Pagination from "../components/Pagination";
import { useFavorites } from "../context/FavoritesContext";
import { FaCircleNotch } from "react-icons/fa";

const Search = () => {
  const [breeds, setBreeds] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [page, setPage] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(false);
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    const fetchBreeds = async () => {
      // Fetch available dog breeds from the API
      const response = await axiosInstance.get("/dogs/breeds");
      setBreeds(response.data);
    };
    fetchBreeds();
  }, []);

  useEffect(() => {
    const fetchDogs = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        // Fetch dog IDs based on selected breed, page, and sort order
        const response = await axiosInstance.get(
          `/dogs/search?breeds=${selectedBreed}&size=10&from=${
            page * 10
          }&sort=name:${sortOrder}`
        );
        const dogIds = response.data.resultIds;
        setHasNext(response.data.next !== null);

        // Fetch detailed dog data using the IDs
        const dogDetailsResponse = await axiosInstance.post("/dogs", dogIds);
        setDogs(dogDetailsResponse.data);
      } catch (error) {
        console.error("Error fetching dogs:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
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

      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center">
          <FaCircleNotch className="animate-spin text-blue-500 text-4xl" />
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default Search;
