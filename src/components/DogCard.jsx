import React from "react";

const DogCard = ({ dog, isFavorite, toggleFavorite, showButton = true }) => {
  return (
    <div className="dog-card">
      {/* Display the dog's image */}
      <img src={dog.img} alt={dog.name} />

      <div className="dog-card-content">
        {/* Display the dog's details */}
        <h2 className="dog-card-title">{dog.name}</h2>
        <p className="dog-card-text">Breed: {dog.breed}</p>
        <p className="dog-card-text">Age: {dog.age}</p>
        <p className="dog-card-text">Location: {dog.zip_code}</p>

        {/* Show button to toggle favorite or a custom message */}
        {showButton ? (
          <button
            className={`dog-card-button ${isFavorite ? "favorite" : ""}`}
            onClick={() => toggleFavorite(dog.id)}
          >
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        ) : (
          <div className="dog-card-message">Your Match Found</div>
        )}
      </div>
    </div>
  );
};

export default DogCard;
