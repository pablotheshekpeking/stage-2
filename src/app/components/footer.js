'use client'

import { Stack, Heading, Text, Box } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import React from "react";

const Footer = () => {
    return (
        <>
            <Stack direction={'row'} ml={['39%', '39%', '47%', '47%']} mb={'50px'}>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaYoutube />
            </Stack>

            <Stack direction={'row'} textAlign={'center'} mb={'50px'}>
                <Box w={'33%'}>
                    <Text textAlign={'center'}>
                        Conditions of Use
                    </Text>
                </Box>
                <Box w={'33%'}>
                    <Text textAlign={'center'}>
                        Privacy & Policy
                    </Text>
                </Box>
                <Box w={'33%'}>
                    <Text textAlign={'center'}>
                        Press Room
                    </Text>
                </Box>
            </Stack>

            <Stack textAlign={'center'} mb={'50px'}>
                <Text textAlign={'center'}>
                    2021 MovieBox by Ibuaku Michael Okechukwu 
                </Text>
            </Stack>
        </>
    );
}

export default Footer;