'use client'

import { Text, Heading, Stack, Box, Img, Show } from "@chakra-ui/react";
import Link from 'next/link';
import { AiFillHeart } from 'react-icons/ai';
import React, { useState } from "react";

const Card = ({ movie }) => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleHeartColor = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Link href={`/movies/${movie.id}`}>
      <Stack direction={'column'} data-testid="movie-card">
        <Box
          mb={'20px'}
          w={'full'}
          h={['200px', '200px', '400px', '400px']}
          backgroundImage={`url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}
          backgroundSize={'cover'}
          backgroundPosition={'center center'}
          data-testid="movie-poster"
        >
          <AiFillHeart
            style={{
              float: "right",
              marginTop: "20px",
              marginRight: "20px",
              color: isClicked ? "red" : "white" // Change color to red when clicked
            }}
            onClick={toggleHeartColor} // Toggle the color when clicked
          />
        </Box>
        <Box>
          <Text color={'#dddddd'} mb={'10px'} data-testid="movie-release-date">
            {movie.release_date}
          </Text>
          <Show above='lg'>
            <Stack direction={'row'} m={'auto'}>
              <Box w={'33%'}>
                <Stack direction={'row'}>
                  <Box> <Img src={'/imdb.png'} /> </Box>
                  <Box><Text>8/10</Text></Box>
                </Stack>
              </Box>
              <Box w={'33%'}></Box>
              <Box w={'33%'}>
                <Stack direction={'row'}>
                  <Box> <Img src={'/tom.png'} /> </Box>
                  <Box><Text>98%</Text></Box>
                </Stack>
              </Box>
            </Stack>
          </Show>
          <Text as={'h6'} mb={'10px'} data-testid="movie-title">{movie.title}</Text>
          <Text color={'#dddddd'}>{movie.genres?.map((genre) => genre.name).join(', ')}</Text>
        </Box>
      </Stack>
    </Link>
  );
}

export default Card;
