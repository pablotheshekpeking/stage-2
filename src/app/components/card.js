'use client'

import { Img, Text, Heading, Stack, Box } from "@chakra-ui/react";
import React from "react";
const Card = () => {
    return (
        <Stack direction={'column'}>
            <Box mb={'20px'} w={'full'}
                h={'400px'}
                backgroundImage={
                    'url(https://static-prod.adweek.com/wp-content/uploads/2019/05/john-wick-poster-qa-hed-page-2019.jpg)'
                }
                backgroundSize={'cover'}
                backgroundPosition={'center center'}>
                <Img />
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