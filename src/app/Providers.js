// app/providers.js
'use client'
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { Stack, Box } from "@chakra-ui/react";
import Hero from './components/hero';
import Card from './components/card'

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider>

        <Hero />

        <Stack direction={'row'} ml={'100px'} mr={'100px'} className='g1'>
          <Box>
            <Card />
          </Box>
          <Box ml={'50px'}>
            <Card />
          </Box>
          <Box ml={'50px'}>
            <Card />
          </Box>
          <Box ml={'50px'}>
            <Card />
          </Box>
        </Stack>

        <Stack direction={'row'} ml={'100px'} mr={'100px'} className='g2'>
          <Box>
            <Card />
          </Box>
          <Box ml={'50px'}>
            <Card />
          </Box>
          <Box ml={'50px'}>
            <Card />
          </Box>
          <Box ml={'50px'}>
            <Card />
          </Box>
        </Stack>

        <Stack direction={'row'} ml={'100px'} mr={'100px'} className='g3'>
          <Box>
            <Card />
          </Box>
          <Box ml={'50px'}>
            <Card />
          </Box>
          <Box ml={'50px'}>
            <Card />
          </Box>
          <Box ml={'50px'}>
            <Card />
          </Box>
        </Stack>

      </ChakraProvider>
    </CacheProvider>
  );
}
