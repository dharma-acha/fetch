import React from "react";
import { renderHook, act } from "@testing-library/react";
import { FavoritesProvider, useFavorites } from "../context/FavoritesContext";

describe("FavoritesContext", () => {
  it("toggles favorites correctly", () => {
    const wrapper = ({ children }) => (
      <FavoritesProvider>{children}</FavoritesProvider>
    );

    // Render the hook to test the useFavorites custom hook
    const { result } = renderHook(() => useFavorites(), { wrapper });

    // Add a favorite and verify it is added
    act(() => {
      result.current.toggleFavorite("1");
    });
    expect(result.current.favorites).toContain("1");

    // Remove the favorite and verify it is removed
    act(() => {
      result.current.toggleFavorite("1");
    });
    expect(result.current.favorites).not.toContain("1");
  });
});
