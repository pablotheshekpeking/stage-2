'use client'

import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react';

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
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'red.500' }}>
              Show me more
            </Button>
            {/*<Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              Show me more
            </Button> */}
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}