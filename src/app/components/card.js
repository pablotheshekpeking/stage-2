'use client'

import { Text, Heading, Stack, Box } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons';
import { AiFillHeart } from 'react-icons/ai';
import React from "react";

const Card = ({ movie }) => {
  return (
    <a href="../details.js"><Stack direction={'column'} data-testid="movie-card">
      <Box
        mb={'20px'}
        w={'full'}
        h={['200px', '200px', '400px', '400px']}
        backgroundImage={`url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        data-testid="movie-poster"
      >
        <AiFillHeart float={'right'} color={'white'} mt={'20px'} boxSize={6} mr={'20px'} />
      </Box>
      <Box>
        <Text color={'#dddddd'} mb={'10px'} data-testid="movie-release-date">
          {movie.release_date} 
        </Text>
        <Text as={'h6'} mb={'10px'} data-testid="movie-title">{movie.title}</Text>
        <Text color={'#dddddd'}>{movie.genres?.map((genre) => genre.name).join(', ')}</Text>
      </Box>
    </Stack></a>
  );
}

export default Card;
