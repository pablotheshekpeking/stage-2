'use client'
import Image from "next/image";
import { Box, Stack, Heading, Img, Text, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
    return (

        <Stack direction={['column', 'column', 'row', 'row']} w={'100%'} ml={['', '', '100px', '100px']} mt={'20px'}>
            <Box className='logo'>
                <Stack direction={'row'}>
                    <Box w={'50%'}>
                        <Img src={"/tv.png"} alt="logo" height={"50px"} width={"50px"} />
                    </Box>
                    <Box w={'50%'}>
                        <Heading color={'white'} fontSize={['20px', '20px', '30px', '30px']} pt={'10%'}>
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
                        <HamburgerIcon borderRadius={'20px'} bg={'red.500'} color={'white'} />
                    </Box>
                </Stack>
            </Box>


        </Stack>
    );
}

export default Navbar;