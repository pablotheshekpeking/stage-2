// pages/details.js
'use client'

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';

const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    // Fetch movie details using the `id` from the query parameter
    if (id) {
      // Make an API request to fetch movie details by `id` (replace with your API logic)
      // Example:
      // fetch(`/api/movies/${id}`)
      //   .then((response) => response.json())
      //   .then((data) => setMovieDetails(data))
      //   .catch((error) => console.error('Error fetching movie details:', error));

      // For demonstration purposes, simulate fetching movie details
      const simulatedMovieDetails = {
        title: 'Sample Movie',
        release_date: '2023-01-01',
        genres: [{ name: 'Action' }, { name: 'Adventure' }],
        backdrop_path: '/example.jpg',
      };
      setMovieDetails(simulatedMovieDetails);
    }
  }, [id]);

  return (
    <Box p={4}>
      {movieDetails ? (
        <>
          <Box
            mb={4}
            w="full"
            h={['200px', '200px', '400px', '400px']}
            backgroundImage={`url(https://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`}
            backgroundSize="cover"
            backgroundPosition="center center"
          />
          <Text fontSize="2xl" fontWeight="bold">
            {movieDetails.title}
          </Text>
          <Text color="#dddddd" mb={4}>
            Release Date: {movieDetails.release_date}
          </Text>
          <Text>{movieDetails.genres?.map((genre) => genre.name).join(', ')}</Text>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </Box>
  );
};

export default Details;
