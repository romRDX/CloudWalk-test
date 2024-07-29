import React from 'react';
import CharacterItem from '../../../modules/characters/CharacterItem';
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { fetchData } from '../../../utils/fetchUtils';

jest.mock('../../../utils/fetchUtils', () => ({
  fetchData: jest.fn(),
}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 300000,
      cacheTime: 300000,
    },
  },
});

const renderWithQueryClient = (ui) => {
  return render(
    <QueryClientProvider client={queryClient}>
      {ui}
    </QueryClientProvider>
  );
};

const mockedData = {
  "name": "Luke Skywalker",
  "height": "172",
  "mass": "77",
  "hair_color": "blond",
  "skin_color": "fair",
  "eye_color": "blue",
  "birth_year": "19BBY",
  "gender": "male",
  "homeworld": "https://swapi.dev/api/planets/1/",
  "films": [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/2/",
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/6/"
  ],
  "species": [],
  "vehicles": [
    "https://swapi.dev/api/vehicles/14/",
    "https://swapi.dev/api/vehicles/30/"
  ],
  "starships": [
    "https://swapi.dev/api/starships/12/",
    "https://swapi.dev/api/starships/22/"
  ],
  "created": "2014-12-09T13:50:51.644000Z",
  "edited": "2014-12-20T21:17:56.891000Z",
  "url": "https://swapi.dev/api/people/1/"
}

describe('CharacterItem', () => {
  beforeEach(() => {
    fetchData.mockResolvedValue({
      name: "Tatooine",
      climate: "arid",
      terrain: "desert"
    });
  });

  it('should render correctly with provided text', async () => {
    renderWithQueryClient(<CharacterItem data={mockedData} />);
    
    expect(screen.getByText('Luke Skywalker')).toBeTruthy();
    expect(screen.getByText('HEIGHT • 172')).toBeTruthy();
    expect(screen.getByText('MASS • 77')).toBeTruthy();
    expect(screen.getByText('GENDER • male')).toBeTruthy();

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledWith(mockedData.homeworld);
      expect(screen.getByText('Tatooine')).toBeTruthy();
    });
  });
});
