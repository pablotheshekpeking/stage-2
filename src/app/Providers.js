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
  return (
    <CacheProvider>
      <ChakraProvider>

        <Hero />

        <Stack mr={['', '', '10%', '10%']} ml={['', '', '10%', '10%']}>
          <MovieGrid />
        </Stack>



        <Footer />

      </ChakraProvider>
    </CacheProvider>
  );
}
