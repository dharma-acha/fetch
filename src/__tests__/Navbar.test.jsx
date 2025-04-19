import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // Required for components using React Router
import Navbar from "../components/Navbar";

describe("Navbar Component", () => {
  it("renders navigation links correctly", () => {
    // Wrap the Navbar component with BrowserRouter to provide routing context
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // Verify that all expected navigation links are rendered
    expect(screen.getByText("Search")).toBeInTheDocument();
    expect(screen.getByText("Favorites")).toBeInTheDocument();
    expect(screen.getByText("Match")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });
});
