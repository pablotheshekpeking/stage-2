'use client'
import Image from "next/image";
import { Box, Stack, Heading, Img, Text, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
    return (

        <Stack direction={['column', 'column', 'row', 'row']} w={'100%'} ml={['', '', '100px', '100px']} mt={'20px'}>
            <Box className='logo'>
                <Stack direction={'row'}>
                    <Box>
                        <Img src={"/tv.png"} alt="logo" height={"50"} width={"50"} />
                    </Box>
                    <Box>
                        <Heading color={'white'} fontSize={['20px', '20px', '30px', '30px']}>
                            MovieBox
                        </Heading>
                    </Box>
                </Stack>
            </Box>


            {/** search bar */}
            <Box ml={['', '', '20%', '20%']} mr={['', '', '20%', '20%']}>
                <InputGroup>
                    <Input type='search' placeholder='What do you want to watch?' width={['100%', '100%', '500px', '500px']} border={'2px'} color={'white'} />
                    <InputRightElement pointerEvents='none'>
                        <SearchIcon color='white' />
                    </InputRightElement>
                </InputGroup>
            </Box>

            <Box>
                <Stack direction={'row'}>
                    <Box>
                        <Text color={'white'}>
                            Sign
                        </Text>
                    </Box>
                    <Box>
                        <HamburgerIcon borderRadius={'30px'} bg={'red.500'} color={'white'} padding={'10px'} />
                    </Box>
                </Stack>
            </Box>


        </Stack>
    );
}

export default Navbar;