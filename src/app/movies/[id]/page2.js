'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Image } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const MovieDetails = ({ movie }) => {
  const router = useRouter();

  return (
    <div>
      {movie && (
        <>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.title} Poster`}
            data-testid="movie-poster"
            width={500}
            height={750}
          />
          <div className="div1">
            {/* Movie info box */}
            <div>
              <div className="info">
                <h1 data-testid="movie-title">{movie.title}</h1>
                <p data-testid="movie-release-date">Release Date: {movie.release_date}</p>
                <p className="PG">Rating: {movie.vote_average}</p>
                <p className="runTime" data-testid="movie-runtime">Runtime: {movie.runtime} minutes</p>
              </div>
              <div data-testid="movie-overview" className="about" style={{ borderBottom: '1px solid black' }}>
                <p>{movie.overview}</p>
              </div>
              {/* Add more movie details here */}
            </div>
            {/* Showtime box */}
          </div>
        </>
      )}
      {!movie && <div>Movie Not Found</div>}
    </div>
  );
};

export default MovieDetails;

MovieDetails.getInitialProps = async ({ query }) => {
  const apiKey = '259375f90a3851d4993f308d06743823'; // Replace with your TMDb API key
  const movieId = query.movieId || '';

  if (!movieId) {
    return { movieData: null };
  }

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`);
    const movieData = response.data;

    // Fetch additional movie details here if needed

    return { movie: movieData };
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return { movie: null };
  }
};
