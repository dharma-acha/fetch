import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { FavoritesProvider, useFavorites } from '../context/FavoritesContext';

describe('FavoritesContext', () => {
  it('toggles favorites correctly', () => {
    const wrapper = ({ children }) => <FavoritesProvider>{children}</FavoritesProvider>;
    const { result } = renderHook(() => useFavorites(), { wrapper });

    act(() => {
      result.current.toggleFavorite('1');
    });
    expect(result.current.favorites).toContain('1');

    act(() => {
      result.current.toggleFavorite('1');
    });
    expect(result.current.favorites).not.toContain('1');
  });
});