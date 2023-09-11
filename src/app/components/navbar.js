'use client'
import { Box, Stack, Img, Heading, Input, InputGroup, InputRightElement  } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';

const Navbar = () => {
    return ( 

        <Stack direction={'row'}>
        <Box width={'20px'}></Box>
        <Box className='navbar'>
          <Stack direction={'row'}>
            <Stack direction={'row'} className='logo'>
              <Img src='' />
              <Heading color={'white'}>
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
     );
}
 
export default Navbar;