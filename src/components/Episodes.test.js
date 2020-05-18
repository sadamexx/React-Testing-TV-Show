import React from 'react';
import { render, getByAltText } from '@testing-library/react';
import Episodes from './Episodes';


const episodeData = [
    {
    id: 1576469,
    name: "Chapter One: Suzie, Do You Copy?",
    season: 3,
    number: 1,
    runtime: 51,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/204/510098.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/204/510098.jpg"
    }
  }];



test('renders Episodes without errors', () => {
    render(<Episodes episodes={[]} />);
});

test('renders episode when episode data is passed down', () => {
    const { getByText, getByRole, rerender } =
    render(<Episodes episodes={[]} />);

    rerender(<Episodes episodes={episodeData} />);
        expect(getByText(/chapter one/i)).toBeInTheDocument();        
})