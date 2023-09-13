'use client'

import { useEffect, useState } from "react";
import { Stack, Img, Box, Text } from "@chakra-ui/react";
import Sidebar from "./components/sidebar";
import axios from "axios";
import { useParams } from "react-router-dom"; // Import useParams from react-router-dom

const Details = ({ movie }) => {
    const [movieData, setMovieData] = useState(null);
    const { movieId } = useParams(); // Extract movieId from URL params

    useEffect(() => {
        // Replace 'YOUR_API_KEY' with your actual TMDB API key

        const apiKey = '259375f90a3851d4993f308d06743823';

        // Make a GET request to fetch movie details using the movieId from URL params
        axios
            .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
            .then((response) => {
                setMovieData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching movie details:", error);
            });
    }, [movieId]); // Include movieId in the dependency array

    return (
        <>
            <Sidebar />

            {movieData && (
                <>
                    <Img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} data-testid="movie-poster" />
                    <Stack direction={"row"} className="div1">
                        {/* Movie info box */}
                        <Box>
                            <Stack direction={"column"}>
                                <Box className="info">
                                    <Text data-testid="movie-title">{movie.title}</Text>
                                    <Text data-testid="movie-release-date">Release Date: {movieData.release_date}</Text>
                                    <Text className="PG">Rating: {movieData.vote_average}</Text>
                                    <Text className="runTime" data-testid="movie-runtime">Runtime: {movieData.runtime} minutes</Text>
                                </Box>
                                <Box data-testid="movie-overview" className="about" borderBottom={"black"}>
                                    <Text>{movieData.overview}</Text>
                                </Box>
                                <Box className="director" borderBottom={"black"}>
                                    <Text>Director: {movieData.director}</Text>
                                </Box>
                                <Box className="writers" borderBottom={"black"}>
                                    <Text>Writers: {movieData.writers.join(", ")}</Text>
                                </Box>
                                <Box className="stars" borderBottom={"black"}>
                                    <Text>Stars: {movieData.stars.join(", ")}</Text>
                                </Box>
                            </Stack>
                        </Box>

                        {/* Showtime box */}
                    </Stack>
                </>
            )}
        </>
    );
}

export default Details;
