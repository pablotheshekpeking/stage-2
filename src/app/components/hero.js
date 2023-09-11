'use client'

import { Stack, Flex, Box, Img, Button, Heading, Input, InputGroup, InputRightElement, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export default function Hero() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://static-prod.adweek.com/wp-content/uploads/2019/05/john-wick-poster-qa-hed-page-2019.jpg)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <Stack direction={'row'}>
        <Box width={'20px'}></Box>
        <Box>
          <Stack direction={'row'}>
            <Box width={'20px'}></Box>
            <Box className='navbar'>
              <Stack direction={'row'}>
                <Stack direction={'row'} className='logo'>
                  <Img src='' />
                  <Heading>
                    MovieBox
                  </Heading>
                </Stack>

                {/** search bar */}
                <InputGroup>
                  <Input type='tel' placeholder='What do you want to watch?' />
                  <InputRightElement pointerEvents='none'>
                    <SearchIcon color='gray.300' />
                  </InputRightElement>
                </InputGroup>


              </Stack>
            </Box>
            <Box width={'20px'}></Box>
          </Stack>
          <Stack maxW={'2xl'} spacing={6} mt={'40%'} className='hero-info'>
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
                Watch Trailer
              </Button>
            </Stack>
          </Stack>
        </Box>
        <Box width={'20px'}></Box>
      </Stack>
    </Flex>
  )
}