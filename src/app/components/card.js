

import { Text, Heading, Stack, Box } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons';
import React, { useEffect, useState } from "react";
import tmdbApi from '../api'; // Import the tmdbApi instance

const Card = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        // Fetch the top-rated movies and limit the results to 10
        const response = await tmdbApi.get('/movie/top_rated', {
          params: {
            page: 1, // Page 1
            language: 'en-US', // Language
          },
        });

        // Get the first 10 movies from the results
        const top10Movies = response.data.results.slice(0, 10);
        
        setTopRatedMovies(top10Movies);
      } catch (error) {
        console.error('Error fetching top-rated movies:', error);
      }
    };

    fetchTopRatedMovies();
  }, []);

  return (
    <>
      {topRatedMovies.map((movie) => (
        <Stack direction={'column'} key={movie.id}>
          <Box
            mb={'20px'}
            w={'full'}
            h={['200px', '200px', '400px', '400px']}
            backgroundImage={`url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}
            backgroundSize={'cover'}
            backgroundPosition={'center center'}
          >
            <CheckCircleIcon float={'right'} color={'white'} mt={'20px'} boxSize={6} mr={'20px'} />
          </Box>
          <Box>
            <Text color={'#dddddd'} mb={'20px'}>
              {movie.release_date ? movie.release_date.slice(0, 4) : 'N/A'}
            </Text>
            <Heading as={'h6'}>{movie.title}</Heading>
            <Text color={'#dddddd'}>{movie.genres.map((genre) => genre.name).join(', ')}</Text>
          </Box>
        </Stack>
      ))}
    </>
  );
}

export default Card;
