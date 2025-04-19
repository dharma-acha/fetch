import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DogCard from "../components/DogCard";

// Group all tests related to the DogCard component

describe("DogCard Component", () => {
  // Mock data for a dog object

  const mockDog = {
    id: "1",
    name: "Buddy",
    breed: "Golden Retriever",
    age: 3,
    zip_code: "12345",
    img: "https://via.placeholder.com/150",
  };

  // This allows us to verify that the function is called correctly in the tests
  const mockToggleFavorite = jest.fn();
  // Test case: Verify that the DogCard renders all dog details correctly

  it("renders dog details correctly", () => {
    // Render the DogCard component with the mock data
    render(
      <DogCard
        dog={mockDog}
        isFavorite={false}
        toggleFavorite={mockToggleFavorite}
      />
    );
    // Check if the dog details are displayed correctly

    expect(screen.getByText("Buddy")).toBeInTheDocument();
    expect(screen.getByText("Breed: Golden Retriever")).toBeInTheDocument();
    expect(screen.getByText("Age: 3")).toBeInTheDocument();
    expect(screen.getByText("Location: 12345")).toBeInTheDocument();
  });

  it("calls toggleFavorite when the button is clicked", () => {
    // Render the DogCard component with the mock data
    render(
      <DogCard
        dog={mockDog}
        isFavorite={false}
        toggleFavorite={mockToggleFavorite}
      />
    );
    // Find the button and simulate a click event
    const button = screen.getByText("Add to Favorites");
    fireEvent.click(button);
    expect(mockToggleFavorite).toHaveBeenCalledWith("1");
  });

  it('shows "Remove from Favorites" when isFavorite is true', () => {
    render(
      <DogCard
        dog={mockDog}
        isFavorite={true}
        toggleFavorite={mockToggleFavorite}
      />
    );
    // Check if the button text is "Remove from Favorites"
    expect(screen.getByText("Remove from Favorites")).toBeInTheDocument();
  });
});
