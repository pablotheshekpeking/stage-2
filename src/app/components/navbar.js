'use client'
import { Box, Stack, Img, Heading, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
    return (

        <Stack direction={'row'}>
            <Box width={'20px'}></Box>
            <Box className='navbar'>
                <Stack direction={'row'}>
                    <Box>
                        <Stack direction={'row'} className='logo'>
                            <Img src='' />
                            <Heading color={'white'}>
                                MovieBox
                            </Heading>
                        </Stack>
                    </Box>


                    {/** search bar */}
                    <Box>
                        <InputGroup>
                            <Input type='tel' placeholder='What do you want to watch?' width={'100&'} />
                            <InputRightElement pointerEvents='none'>
                                <SearchIcon color='gray.300' />
                            </InputRightElement>
                        </InputGroup>
                    </Box>


                    <Stack>
                    <Box>
                        <Text>
                            Sign in
                        </Text>
                    </Box>
                    <Box>
                        <HamburgerIcon borderRadius={'30px'} bg={'red.500'} color={'white'} />
                    </Box>
                    </Stack>


                </Stack>
            </Box>
            <Box width={'20px'}></Box>
        </Stack>
    );
}

export default Navbar;