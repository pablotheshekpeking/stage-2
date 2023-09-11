'use client'

import { Stack, Heading, Text, Box } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import React from "react";

const Footer = () => {
    return (
        <>
            <Stack direction={'row'} ml={'45%'}>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaYoutube />
            </Stack>

            <Stack direction={'row'} textAlign={'center'}>
                <Box>
                    <Text>
                        Conditions of Use
                    </Text>
                </Box>
                <Box>
                    <Text>
                        Privacy & Policy
                    </Text>
                </Box>
                <Box>
                    <Text>
                        Press Room
                    </Text>
                </Box>
            </Stack>

            <Stack textAlign={'center'}>
                <Text textAlign={'center'}>
                    2021 MovieBox by Adriana Eka Prayduha 
                </Text>
            </Stack>
        </>
    );
}

export default Footer;