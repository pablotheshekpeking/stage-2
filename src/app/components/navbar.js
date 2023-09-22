'use client'
import Image from "next/image";
import { Box, Stack, Heading, Img, Text, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import Search from "./searchbar";

const Navbar = () => {
    const [searchResults, setSearchResults] = useState([]);

  // Callback function to receive search results
  const handleSearch = (results) => {
    setSearchResults(results);
  };
    return (

        <Stack direction={['column', 'column', 'row', 'row']} w={'100%'} ml={['', '', '100px', '100px']} mt={'20px'}>
            <Box className='logo' w={'20%'}>
                <Stack direction={'row'}>
                    <Box w={'50px'} pr={'0px'}>
                        <Img src={"/tv.png"} alt="logo" height={"50px"} width={"50px"} />
                    </Box>
                    <Box pl={'0px'} pt={['2%', '2%', '10%', '10%']}>
                        <Heading color={'white'} fontSize={['20px', '20px', '20px', '20px']}>
                            MovieBox
                        </Heading>
                    </Box>
                </Stack>
            </Box>


            {/** search bar */}
            <Box  w={'60%'}>
                <Search onSearch={handleSearch} w={'100%'} />
            </Box>

            <Box w={'20%'}>
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