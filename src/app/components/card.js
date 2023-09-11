'use client'

import { Img, Text, Heading, Stack, Box } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons';
import React from "react";
const Card = () => {
    return (
        <Stack direction={'column'}>
            <Box mb={'20px'} w={'full'}
                h={'400px'}
                backgroundImage={
                    'url(batman.jpeg)'
                }
                backgroundSize={'cover'}
                backgroundPosition={'center center'}>
                    <CheckCircleIcon float={'right'} />
            </Box>
            <Box>
                <Text color={'#dddddd'} mb={'20px'}>USA, 2005</Text>
                <Heading as={'h6'}>Batman Begins</Heading>
                <Text color={'#dddddd'}>Action, Adventure</Text>
            </Box>
        </Stack>
    );
}

export default Card;