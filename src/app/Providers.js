// app/providers.js
'use client'
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { Grid, GridItem } from "@chakra-ui/react";
import React from 'react';
import Hero from './components/hero';
import Card from './components/card'
import Footer from './components/footer';
import MovieGrid from './components/MovieGrid';

export function Providers({ children }) {
  const [searchResults, setSearchResults] = useState([]);

  // Callback function to receive search results
  const handleSearch = (results) => {
    setSearchResults(results);
  };
  return (
    <CacheProvider>
      <ChakraProvider>

        <Hero />

        <MovieGrid initialMovies={searchResults} />



        <Footer />

      </ChakraProvider>
    </CacheProvider>
  );
}
