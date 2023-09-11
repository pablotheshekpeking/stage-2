'use client'

import { Stack, Flex, Box, Button, Heading, Text, VStack, useBreakpointValue } from '@chakra-ui/react';

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
          <Stack maxW={'2xl'} spacing={6}>
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
                Show me more
              </Button>
            </Stack>
          </Stack>
        </Box>
        <Box width={'20px'}></Box>
      </Stack>
    </Flex>
  )
}