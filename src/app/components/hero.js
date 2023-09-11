'use client'

import { Stack, Flex, Box, Img, Button, Heading, Input, InputGroup, InputRightElement, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { FaPlayCircle } from 'react-icons/fa';
import Navbar from './navbar';


export default function Hero() {
  return (
    <><Flex
      w={'full'}
      h={'90vh'}
      backgroundImage={'url(https://static-prod.adweek.com/wp-content/uploads/2019/05/john-wick-poster-qa-hed-page-2019.jpg)'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <Stack direction={'row'}>
        <Box width={'20px'}></Box>
        <Box>
          <Navbar />
          <Stack maxW={'2xl'} spacing={6} mt={'20%'} className='hero-info' ml={['', '', '100px', '100px']}>
            <Heading
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              John Wick 3: Parabellum
            </Heading>
            <Text color={'white'}>
              John Wick is on the run after killing a memeber of the international
              assasins' guild and with a $14 million price tag on his head, he is the target
              of hit men and women everywhere.
            </Text>
            <Stack direction={'row'}>
              <Button
                bg={'red.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'red.500' }}>
                <FaPlayCircle />  Watch Trailer
              </Button>
            </Stack>
          </Stack>
        </Box>
        <Box width={'20px'}></Box>
      </Stack>
    </Flex>


    {/** featured movies */}
    <Stack direction={'row'} mr={['', '', '100px', '100px']} ml={['', '', '100px', '100px']} mt={['50px', '50px', '100px', '100px']} mb={['50px', '50px', '100px', '100px']}>
        <Box w={'50%'}>
          <Heading fontSize={['12px', '30px', '30px', '30px']}>
            Featured Movie
          </Heading>
        </Box>
        <Box w={'50%'}>
          <Text color={'red.500'} textAlign={'right'} pt={'5px'}>
            <a href="http://">See more </a> <ChevronRightIcon color={'red.500'} />
          </Text>
        </Box>
      </Stack>
      </>
  )
}