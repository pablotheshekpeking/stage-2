'use client'

import { Stack, Heading, Text, Box } from "@chakra-ui/react";
import { FaFacebook } from 'react-icons/fa';
import React from "react";

const Footer = () => {
    return ( 
        <Stack direction={'row'}>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
        </Stack>
     );
}
 
export default Footer;