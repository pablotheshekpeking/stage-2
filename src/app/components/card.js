import { Text, Heading, Stack, Box } from "@chakra-ui/react";
import { Link } from 'next/link';
import { AiFillHeart } from 'react-icons/ai';
import React, { useState } from "react";

const Card = ({ movie }) => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleHeartColor = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Link href={`../pages/details?id=${movie.id}`}>
      <a>
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
            <Text as={'h6'} mb={'10px'} data-testid="movie-title">{movie.title}</Text>
            <Text color={'#dddddd'}>{movie.genres?.map((genre) => genre.name).join(', ')}</Text>
          </Box>
        </Stack>
      </a>
    </Link>
  );
}

export default Card;
