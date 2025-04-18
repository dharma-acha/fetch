import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DogCard from '../components/DogCard';

describe('DogCard Component', () => {
  const mockDog = {
    id: '1',
    name: 'Buddy',
    breed: 'Golden Retriever',
    age: 3,
    zip_code: '12345',
    img: 'https://via.placeholder.com/150',
  };

  const mockToggleFavorite = jest.fn();

  it('renders dog details correctly', () => {
    render(<DogCard dog={mockDog} isFavorite={false} toggleFavorite={mockToggleFavorite} />);
    expect(screen.getByText('Buddy')).toBeInTheDocument();
    expect(screen.getByText('Breed: Golden Retriever')).toBeInTheDocument();
    expect(screen.getByText('Age: 3')).toBeInTheDocument();
    expect(screen.getByText('Location: 12345')).toBeInTheDocument();
  });

  it('calls toggleFavorite when the button is clicked', () => {
    render(<DogCard dog={mockDog} isFavorite={false} toggleFavorite={mockToggleFavorite} />);
    const button = screen.getByText('Add to Favorites');
    fireEvent.click(button);
    expect(mockToggleFavorite).toHaveBeenCalledWith('1');
  });

  it('shows "Remove from Favorites" when isFavorite is true', () => {
    render(<DogCard dog={mockDog} isFavorite={true} toggleFavorite={mockToggleFavorite} />);
    expect(screen.getByText('Remove from Favorites')).toBeInTheDocument();
  });
});